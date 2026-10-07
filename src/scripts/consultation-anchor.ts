export {};

const form = document.querySelector<HTMLElement>('#form');
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;

// Recheck the initial anchor after fonts and embeds settle. A browser can
// otherwise restore an old scroll offset, especially across responsive layouts.
// Preserve back/forward restoration and stop as soon as the visitor interacts.
if (form && location.hash === '#form' && navigation?.type !== 'back_forward') {
  const interactions = new AbortController();
  let userInteracted = false;
  // Window blur also catches focus moving into the cross-origin form iframe.
  for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown', 'blur']) {
    window.addEventListener(event, () => { userInteracted = true; }, {
      once: true, passive: true, signal: interactions.signal,
    });
  }
  const align = () => {
    if (!userInteracted && location.hash === '#form') {
      form.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  };
  align();
  const pageLoaded = document.readyState === 'complete' ? Promise.resolve() :
    new Promise<void>(resolve => window.addEventListener('load', () => resolve(), { once: true }));
  void Promise.all([document.fonts.ready, pageLoaded]).then(() => {
    // Scroll restoration can run after load. Wait for the next painted layout
    // before the final correction instead of racing the browser's old offset.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      align();
      interactions.abort();
    }));
  });
}
