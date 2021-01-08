var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'product.js',
    '/images/yarn.png',
    '/images/cat-house.png',
    '/images/cat-litter.png',
    '/images/laser-pointer.png',
    '/images/icon-store-512.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});