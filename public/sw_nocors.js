const isImage = (fetchRequest) => {
    return fetchRequest.method === 'GET' && fetchRequest.destination === 'image';
}


this.addEventListener('fetch', (e) => {
    if (isImage(e.request)) {
        e.respondWith(
            fetch(e.request)
                .then((response) => {
                    console.group('mode - no-cors'); 
                    console.table({
                        'url': e.request.url,
                        'status': response.status,
                        'ok': response.ok,
                    });
                    console.groupEnd('mode - no-cors');
                    console.log('response obj', response);
                    return response;
                })
                .catch((err) => {
                    console.log('image error', err);
                })
        )
    }
});
