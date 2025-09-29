console.log('script');
window.addEventListener('message', function (event) {
    console.log('listener');
    if (event.data.type === 'sendParentUrl') {
        console.log('if');
        event.source.postMessage({
            type: 'parentUrl',
            url: window.location.href
        }, '*');
    }
});
     
