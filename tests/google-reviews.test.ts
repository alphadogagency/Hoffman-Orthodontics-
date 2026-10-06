import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleGoogleReviews } from '../worker/google-reviews.ts';
const env = { GOOGLE_PLACES_API_KEY: 'test-not-a-real-key', GOOGLE_PLACE_ID: 'test-place' };
const request = () => new Request('https://example.test/api/google-reviews?place=attacker&url=https://attacker.test');
const review = (extra = {}) => ({ rating: 5, originalText: { text: '<script>untrusted text</script>', languageCode: 'en' }, text: { text: 'translated' }, authorAttribution: { displayName: 'Test reviewer', uri: 'https://www.google.com/maps/contrib/test', photoUri: 'javascript:alert(1)' }, googleMapsUri: 'https://www.google.com/maps/reviews/test', publishTime: '2026-10-01T00:00:00Z', ...extra });
test('uses only fixed server configuration, excludes unsafe/ineligible reviews and preserves original text', async () => {
  const fetcher: typeof fetch = async (url, options) => {
    assert.equal(String(url), 'https://places.googleapis.com/v1/places/test-place?languageCode=en');
    assert.equal(options?.redirect, 'manual');
    assert.equal(new Headers(options?.headers).get('X-Goog-Api-Key'), env.GOOGLE_PLACES_API_KEY);
    assert.equal(new Headers(options?.headers).get('X-Goog-FieldMask'), 'reviews,attributions,rating,userRatingCount');
    return Response.json({ rating: 4.9, userRatingCount: 9, reviews: [review({ publishTime: null }), review({ rating: 4 }), review({ googleMapsUri: 'javascript:alert(1)' }), review(), review({ publishTime: '2026-10-05T00:00:00Z' })], attributions: [{ provider: 'Provider', providerUri: 'https://provider.test' }] });
  };
  const response = await handleGoogleReviews(request(), env, fetcher); const result = await response.json();
  assert.equal(response.status, 200); assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(result.reviews.length, 3); assert.equal(result.reviews[0].date, '2026-10-05T00:00:00.000Z'); assert.equal(result.reviews[2].date, null);
  assert.equal(result.reviews[0].text, '<script>untrusted text</script>'); assert.equal(result.reviews[0].avatarUrl, null);
  assert.equal(result.rating, 4.9); assert.equal(result.reviewCount, 9); assert.equal(result.attributions[0].name, 'Provider');
});
test('rejects unsupported methods, cross-site requests, and missing configuration before upstream', async () => {
  const noFetch: typeof fetch = async () => { throw new Error('Must not fetch'); };
  assert.equal((await handleGoogleReviews(new Request(request(), { method: 'POST' }), env, noFetch)).status, 405);
  assert.equal((await handleGoogleReviews(new Request(request(), { headers: { 'Sec-Fetch-Site': 'cross-site' } }), env, noFetch)).status, 403);
  const response = await handleGoogleReviews(request(), {}, noFetch); assert.equal(response.status, 503); assert.equal((await response.json()).code, 'CONFIGURATION_MISSING');
});
test('never exposes upstream error messages or secrets', async () => {
  const response = await handleGoogleReviews(request(), env, async () => Response.json({ error: { message: env.GOOGLE_PLACES_API_KEY, details: [{ reason: 'API_KEY_SERVICE_BLOCKED', metadata: { key: env.GOOGLE_PLACES_API_KEY } }] } }, { status: 403 }));
  const text = await response.text(); assert.equal(response.status, 503); assert.ok(!text.includes(env.GOOGLE_PLACES_API_KEY)); assert.match(text, /API_KEY_SERVICE_BLOCKED/);
});
test('handles malformed JSON, network failures, and empty provider responses without invented content', async () => {
  for (const fetcher of [async () => new Response('<html>error</html>'), async () => { throw new Error('network'); }]) {
    const response = await handleGoogleReviews(request(), env, fetcher); assert.equal(response.status, 503); assert.equal((await response.json()).code, 'GOOGLE_UNAVAILABLE');
  }
  const response = await handleGoogleReviews(request(), env, async () => Response.json({ rating: '5', userRatingCount: -1 }));
  const result = await response.json(); assert.deepEqual(result.reviews, []); assert.equal(result.rating, null); assert.equal(result.reviewCount, null);
});
