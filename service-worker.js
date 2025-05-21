const CACHE_NAME = "ruffle-cache-v1";
const OFFLINE_FILES = [
  "./",
  "./index.html",
  "./game.swf",
  "./style.css",
  "./icon-192.png",
  "./icon-512.png",
  "https://unpkg.com/@ruffle-rs/ruffle", // optional
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});


