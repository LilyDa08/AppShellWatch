var cacheName = 'shell-content.V.12';
var filesToCache = [
  './offline.html', // html file
  './assets/css/offline.css'
];

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function () {
  console.log('[Service Worker] activate');
});

// self.addEventListener('fetch', function (e) {
//   e.respondWith(
//     caches.match(e.request).then(function (response) {
//       return response || fetch(e.request);
//     })
//   )
// })

self.addEventListener('fetch', function (event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

    }).catch(function (error) {
      console.log(error);
    })
  );
});

// self.addEventListener('fetch', function(event) {
//   console.log('Fetch event for ', event.request.url);
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       if (response) {
//         console.log('Found ', event.request.url, ' in cache');
//         return response;
//       }
//       console.log('Network request for ', event.request.url);
//       return fetch(event.request)

//     }).catch(function(error) {

//       return caches.match('index.html');

//     })
//   );