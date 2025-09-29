console.log('Скрипт загрузился');

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("myIframe");

    window.parent.postMessage(
        {
          type: "test",
          parentUrl: window.location.href, // URL партнёрской страницы
        },
      "*"
    );
  
  console.log(iframe);
  // Когда iframe загрузился
  iframe.addEventListener("message", () => {
      console.log('внутри massage');
    iframe.contentWindow.postMessage(
      {
        type: "init",
        parentUrl: window.location.href,
      },
      "*"
    );
  });
});
