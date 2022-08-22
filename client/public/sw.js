let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                './favicon1.ico',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/bootstrap.min.css',
                '/index.html',
                '/',
                '/login',
                '/signup',
                '/profile',
                '/create-quote',
                '/other-profile/:id',
                'https://react-graphql-front-end.herokuapp.com/static/css/main.f97393ba.css',
                'https://react-graphql-front-end.herokuapp.com/static/js/main.0122d2f2.js',
                'https://graph-ql1.herokuapp.com'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {


    // console.warn("url",event.request.url)


    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                // let requestUrl = event.request.clone();
                // fetch(requestUrl)
            })
        )
    }
})
