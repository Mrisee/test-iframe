console.log("✅ script loaded in iframe");

window.addEventListener("message", (event) => {
  console.log("📩 iframe got message:", event.data);

  if (event.data.type === "sendParentUrl") {
    event.source.postMessage(
      { type: "parentUrl", url: window.location.href },
      event.origin
    );
  }
});

// отправим тестовое сообщение сразу при загрузке
window.parent.postMessage({ type: "hello-from-iframe" }, "*");
