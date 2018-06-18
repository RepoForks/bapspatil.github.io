var cacheName = 'bapspatil';
var filesToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/felicity.js',
    '/img/bapspatil.png',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
    'https://fonts.googleapis.com/css?family=Rubik:300,400,500',
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

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate',function(e){
    console.log('Activating...');
    e.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                if(key !== cacheName){
                    console.log('Removing old cached files...');
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
})