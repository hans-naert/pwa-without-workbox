console.log("Hello from service worker!!")

const files = [
    "./icons/apple-splash-2048-2732.jpg",
    "./icons/apple-splash-2732-2048.jpg",
    "./icons/apple-splash-1668-2388.jpg",
    "./icons/apple-splash-2388-1668.jpg",
    "./icons/apple-splash-1536-2048.jpg",
    "./icons/apple-splash-2048-1536.jpg",
    "./icons/apple-splash-1668-2224.jpg",
    "./icons/apple-splash-2224-1668.jpg",
    "./icons/apple-splash-1620-2160.jpg",
    "./icons/apple-splash-2160-1620.jpg",
    "./icons/apple-splash-1290-2796.jpg",
    "./icons/apple-splash-2796-1290.jpg",
    "./icons/apple-splash-1179-2556.jpg",
    "./icons/apple-splash-2556-1179.jpg",
    "./icons/apple-splash-1284-2778.jpg",
    "./icons/apple-splash-2778-1284.jpg",
    "./icons/apple-splash-1170-2532.jpg",
    "./icons/apple-splash-2532-1170.jpg",
    "./icons/apple-splash-1125-2436.jpg",
    "./icons/apple-splash-2436-1125.jpg",
    "./icons/apple-splash-1242-2688.jpg",
    "./icons/apple-splash-2688-1242.jpg",
    "./icons/apple-splash-828-1792.jpg",
    "./icons/apple-splash-1792-828.jpg",
    "./icons/apple-splash-1242-2208.jpg",
    "./icons/apple-splash-2208-1242.jpg",
    "./icons/apple-splash-750-1334.jpg",
    "./icons/apple-splash-1334-750.jpg",
    "./icons/apple-splash-640-1136.jpg",
    "./icons/apple-splash-1136-640.jpg",
    "./icons/manifest-icon-512.maskable.png",
    "./icons/manifest-icon-192.maskable.png",    
    "./index.html",
    "./index.js",
    "./manifest.json"
]

const currentCache = 'cache-v1.0';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(currentCache).then(cache => {
            return cache.addAll(files);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.filter(cacheName => {
                return cacheName !== currentCache
            }).map(cacheName => caches.delete(cacheName))
        ))
    );
});