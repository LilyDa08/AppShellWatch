var cacheName = 'shell-content.V.11';
var filesToCache = [
  './offline.html',  // html file
  './assets/css/offline.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function () {
  console.log('[Service Worker] activate');
} );

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  )
})