self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bus-app-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'about.html',
        'search.html',
        'nav.html',
        'footer.html',
        'style.css',
        'manifest.json',
        'data.json',
        // Add icons if available
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
