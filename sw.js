var cacheName = 'shell-content';
var filesToCache = [
  './Homepage.html',   // html file
  './assets/css/homepage.css',
  './assets/js/homepage.js'
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
