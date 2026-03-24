const CACHE_NAME = "safex-v1";

const urlsToCache = [
  "/safex-automobile-ERP/",
  "/safex-automobile-ERP/index.html",
  "/safex-automobile-ERP/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
