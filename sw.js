self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                
                '/PTS_Flight_Logv1', // Ensure the start page is cached
                '/PTS_Flight_Logv1/index.html',
                '/PTS_Flight_Logv1/training_flights.html',
                '/PTS_Flight_Logv1/styles.css',
                '/PTS_Flight_Logv1/icons/icon-192x192.png',
                '/PTS_Flight_Logv1/icons/icon-512x512.png'
            
                
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
