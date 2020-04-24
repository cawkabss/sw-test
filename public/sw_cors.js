
const isImage = (fetchRequest) => {
    return fetchRequest.method === 'GET' && fetchRequest.destination === 'image';
}


this.addEventListener('fetch', (e) => {
    if (isImage(e.request)) {
        e.respondWith(
            fetch(e.request, { mode: 'cors', credentials: 'same-origin' })
                .then((response) => {
                    console.group('mode - cors'); 
                    console.table({
                        'url': e.request.url,
                        'status': response.status,
                        'ok': response.ok,
                    });
                    console.groupEnd('mode cors');
                    console.log('response obj', response);
                    return response.blob();
                })
                .then((responseBlob) => {
                    console.log(`%c read img success ${e.request.url}`, 'background: green; color: white');
                    return new Response(responseBlob);
                })
                .catch((err) => {
                    console.log(`%c read img error ${e.request.url}`, 'background: red; color: white');
                    return new Response();
                })
        )
    }
});
