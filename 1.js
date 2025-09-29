console.log('script');
// window.addEventListener('message', function (event) {
//     console.log('listener');
//     if (event.data.type === 'sendParentUrl') {
//         console.log('if');
//         event.source.postMessage({
//             type: 'parentUrl',
//             url: window.location.href
//         }, '*');
//     }
// });

const iframe = document.getElementById(("iframe");
    // Когда iframe загрузился, шлём ему данные
    iframe.addEventListener("message", () => {
      
      iframe.contentWindow.postMessage(
        {
          type: "init",
          parentUrl: window.location.href, // URL партнёрской страницы
          referrer: document.referrer,     // можно ещё реферер
        },
        "*"
      );
    });
     
