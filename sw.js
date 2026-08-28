// Minimal service worker — required for PWA/TWA installability checks.
// This app always needs fresh data from GitHub, so we intentionally do NOT
// cache anything here; we just pass all requests straight through to the network.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
