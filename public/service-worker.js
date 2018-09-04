// service-worker.js

// Flag for enabling cache in production
var doCache = false;

var CACHE_NAME = '/public';

// Delete old caches
self.addEventListener('activate', event => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
  );
});

// This triggers when user starts the app
self.addEventListener('install', function(event) {
  // if (doCache) {
    console.log('installing service worker')
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log("pre-caching app shell ");
          cache.addAll([
            '/',
            '/index.html',
            '/favicon.ico'
           ]);
        })
    );
  // }
});

// Here we intercept request and serve up the matching files
self.addEventListener('fetch', function(event) {
  // if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  // }
});