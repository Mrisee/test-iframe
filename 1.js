console.log('Скрипт загрузился');
const cookies = document.cookie.split(';');
console.log(cookies);
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("myIframe");

  console.log(iframe);
  // Когда iframe загрузился
  iframe.addEventListener("message", () => {
      console.log('внутри massage');
    iframe.contentWindow.postMessage(
      {
        type: "init",
        parentUrl: window.location.href,
        referrer: document.referrer
      },
      "*"
    );
  });

  // // Слушаем ответы из iframe
  // window.addEventListener("message", (event) => {
  //   console.log("Parent got message:", event.data);
  // });
});
