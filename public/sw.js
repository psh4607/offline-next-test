const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/next.svg',
    'http://localhost:3000/api/mock',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(async (response) => {
                if (response) {

                    const responseToCache = response.clone();
                    const responseToIdb = response.clone()

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache).then();
                        });

                    await storeIdb(responseToIdb)

                    return response;

                }
                return fetch(event.request)
                    .then(async (response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            console.log('fetch err', response)
                            return response;
                        }
                        const responseToCache = response.clone();
                        const responseToIdb = response.clone()
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        await storeIdb(responseToIdb)

                        return response;
                    });
            })
    );
});

async function storeIdb (response) {
    const idbReq = await self.indexedDB.open('my-db', 1);


    idbReq.onsuccess = async () => {
        const db = idbReq.result;

        if(!db.objectStoreNames.contains('api-cache')) {
            const store = db.createObjectStore('api-cache');
            store.createIndex('url', 'url', { unique: true })
            db.close()
        }

        const trx = db.transaction('api-cache', 'readwrite');

        const store = trx.objectStore('api-cache');



        store.put(        response.text(), response.url);
        //
        // trx.oncomplete = () => {
        //
        // }

        // trx.commit();
        // db.close()

    };

    idbReq.onupgradeneeded = (event) => {
        const db = idbReq.result;

        if(!db.objectStoreNames.contains('api-cache')) {
            db.createObjectStore('api-cache');
        }

        db.close()
    };
}

