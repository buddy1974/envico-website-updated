const CACHE = "envico-v1";
const URLS = ["/", "/about", "/services", "/contact", "/portal"];

self.addEventListener("install", (e) =>
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(URLS)))
);

self.addEventListener("fetch", (e) =>
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  )
);
