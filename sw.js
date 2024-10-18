let cacheName = "pwa do balacobaco";
let filesToCache = ["/", "/index.html", "/ccs/style.css", "/js/main.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        catches.match(e.request).then((response) =>{
            return response || fetch(e.request);
        })
    )
});