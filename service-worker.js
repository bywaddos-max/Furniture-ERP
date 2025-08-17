const CACHE = "furniture-erp-cache-v1-4-20250817202541";
const ASSETS = ["./","./index.html?v=20250817202541","./manifest.json?v=20250817202541","./initial_data.json?v=20250817202541"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (ASSETS.some(a => url.pathname.endsWith(a.replace("./","/")))) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  } else {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  }
});
