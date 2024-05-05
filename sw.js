
const CACHE_NAME = 'v1'
const URLS_TO_CACHE = [
    "/",
    "/index.html",
    "/style.css",
    "/index.js"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Opened cache")
                return cache.addAll(URLS_TO_CACHE)
            })
    )
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(function () {
            // If fetch fails, check the cache
            return caches.match(event.request).then(function (response) {
                if (response) {
                    return response
                }
                // If not found in cache, handle the error (optional)
                // You could return a default offline page here
            })
        })
    )
})