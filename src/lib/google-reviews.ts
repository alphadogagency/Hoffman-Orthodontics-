export const googleReviewsUrl = 'https://maps.app.goo.gl/JrZmSSodFu2KYgvYA';
export interface LiveReview {
  name: string; text: string; sourceUrl: string; rating: 1|2|3|4|5;
  date: string|null; authorUrl: string|null; avatarUrl: string|null; languageCode: string|null;
}
export interface GoogleReviewsResponse {
  reviews: LiveReview[]; attributions: { name: string; uri: string|null }[];
  rating: number|null; reviewCount: number|null;
}
