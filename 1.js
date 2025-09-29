console.log('script');

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("myIframe");

  // Когда iframe загрузился
  iframe.addEventListener("message", () => {
    iframe.contentWindow.postMessage(
      {
        type: "init",
        parentUrl: window.location.href,
        referrer: document.referrer
      },
      "*"
    );
  });

  // Слушаем ответы из iframe
  window.addEventListener("message", (event) => {
    console.log("Parent got message:", event.data);
  });
});
