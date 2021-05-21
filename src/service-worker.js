var CACHENAME = "cachestore";
var FILES = [
    "/index.html",
    // "/css/style.css",
    // "/js/app.js"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHENAME).then(function (cache) {
            return cache.addAll(FILES);
        })
    );
});