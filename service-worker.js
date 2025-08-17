const CACHE = "furniture-erp-cache-v1-5-20250817203802";
const ASSETS = ["./","./index.html?v=20250817203802","./manifest.json?v=20250817203802","./initial_data.json?v=20250817203802"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => { e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
