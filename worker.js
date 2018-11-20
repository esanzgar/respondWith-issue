this.addEventListener('fetch', (event) => {
  event.respondWith(function() {
    return fetch(event.request).then(response => {
      if (event.request.url === 'https://httpbin.org/redirect-to?url=https://httpbin.org/get') {
        console.log('Final URL is ignored: ' + response.url);
      }
      return response
    })
  }());
});
