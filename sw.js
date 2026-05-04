const CACHE = 'windcheck-v1';
const ASSETS = [
  '/windcheck/',
  '/windcheck/index.html',
  '/windcheck/manifest.json'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
