import type { GoogleReviewsResponse } from '../lib/google-reviews';
const section = document.querySelector<HTMLElement>('#reviews');
if (section?.dataset.reviewsEnabled === 'true') {
  const track = section.querySelector<HTMLElement>('#reviews-track')!;
  const template = section.querySelector<HTMLTemplateElement>('[data-review-template]')!;
  const safeUrl = (value: unknown) => {
    if (typeof value !== 'string') return null;
    try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; } catch { return null; }
  };
  const link = (url: string, label: string) => {
    const a = document.createElement('a'); a.href = url; a.textContent = label;
    a.target = '_blank'; a.rel = 'noopener noreferrer'; return a;
  };
  let loaded = false;
  async function loadReviews() {
    if (loaded || !section) return;
    loaded = true;
    try {
      const response = await fetch('/api/google-reviews', { cache: 'no-store', signal: AbortSignal.timeout(8000) });
      if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) return;
      const data: GoogleReviewsResponse = await response.json();
      if (typeof data.rating === 'number' && data.rating >= 1 && data.rating <= 5 && Number.isSafeInteger(data.reviewCount) && data.reviewCount! > 0) {
        const rating = document.querySelector('[data-hero-rating]');
        if (rating) rating.textContent = `${data.rating.toFixed(1)} / 5 · ${data.reviewCount} Google ${data.reviewCount === 1 ? 'review' : 'reviews'}`;
      }
      if (!Array.isArray(data.reviews)) return;
      for (const review of data.reviews.slice(0, 5)) {
        const source = safeUrl(review.sourceUrl);
        if (review.rating !== 5 || !source || typeof review.text !== 'string' || !review.text.trim() || typeof review.name !== 'string') continue;
        const fragment = template.content.cloneNode(true) as DocumentFragment;
        const article = fragment.querySelector<HTMLElement>('article')!;
        const text = fragment.querySelector<HTMLElement>('[data-review-text]')!;
        text.textContent = review.text;
        if (review.languageCode && /^[A-Za-z]{2,3}(?:-[A-Za-z0-9]+)*$/.test(review.languageCode)) text.lang = review.languageCode;
        const expand = fragment.querySelector<HTMLButtonElement>('[data-review-expand]')!;
        // Full text is available on demand; never rewrite a patient's words.
        if (review.text.length > 320) {
          article.classList.add('review-collapsed'); expand.hidden = false;
          expand.addEventListener('click', () => { const collapsed = article.classList.toggle('review-collapsed'); expand.setAttribute('aria-expanded', String(!collapsed)); expand.textContent = collapsed ? 'Read more' : 'Read less'; });
        }
        const author = fragment.querySelector('[data-review-author]')!;
        const authorUrl = safeUrl(review.authorUrl);
        if (authorUrl) author.append(link(authorUrl, review.name)); else author.textContent = review.name;
        const avatarUrl = safeUrl(review.avatarUrl);
        if (avatarUrl) { const avatar = fragment.querySelector<HTMLImageElement>('[data-review-avatar]')!; avatar.src = avatarUrl; avatar.hidden = false; }
        const date = fragment.querySelector<HTMLTimeElement>('[data-review-date]')!;
        if (review.date && Number.isFinite(Date.parse(review.date))) { date.dateTime = review.date; date.textContent = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'America/Chicago' }).format(new Date(review.date)); date.hidden = false; }
        fragment.querySelector<HTMLAnchorElement>('[data-review-source]')!.href = source;
        track.append(fragment);
      }
      if (!track.children.length) return;
      section.querySelector<HTMLElement>('[data-review-fallback]')!.hidden = true;
      section.querySelector<HTMLElement>('[data-review-content]')!.hidden = false;
      const providers = section.querySelector('[data-review-providers]')!;
      for (const provider of Array.isArray(data.attributions) ? data.attributions : []) {
        if (typeof provider.name !== 'string') continue;
        const p = document.createElement('p'); const url = safeUrl(provider.uri);
        if (url) p.append(link(url, provider.name)); else p.textContent = provider.name;
        providers.append(p);
      }
      const controls = section.querySelector<HTMLElement>('[data-review-controls]')!;
      const previous = controls.querySelector<HTMLButtonElement>('[data-review-prev]')!;
      const next = controls.querySelector<HTMLButtonElement>('[data-review-next]')!;
      const update = () => {
        const maximum = track.scrollWidth - track.clientWidth;
        controls.hidden = maximum <= 2;
        previous.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft >= maximum - 2;
      };
      const move = (direction: number) => track.scrollBy({ left: direction * (track.firstElementChild!.getBoundingClientRect().width + 24), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      previous.addEventListener('click', () => move(-1)); next.addEventListener('click', () => move(1));
      track.addEventListener('scroll', update, { passive: true });
      new ResizeObserver(update).observe(track); update();
    } catch { /* The real Google profile link remains available. No retries or fabricated reviews. */ }
  }
  const target = document.querySelector('.hero-rating') || section;
  const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); void loadReviews(); } }, { rootMargin: '150px' });
  observer.observe(target);
}
