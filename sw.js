var cacheName = 'bapspatil';
var filesToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/felicity.js',
    '/img/bapspatil.png',
    '/assets/Bapusaheb-Patil-Resume-MobileAppDeveloper.pdf',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
    'https://fonts.googleapis.com/css?family=Montserrat:700|Rubik:300,400',
    'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
];

self.addEventListener('install', function (e) {
    console.log('Installing...');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r || fetch(e.request).then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    console.log('[Service Worker] Caching new resource: ' + e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('Activating...');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('Removing old cached files...');
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});
