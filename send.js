async function sendToTelegram(event) {
  event.preventDefault();

  const TOKEN = "8325169049:AAF6TFSYKvV_GA1T1haqvOPAatwT4vhNHyM";
  const CHAT_ID = "585719523";
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const topic = document.getElementById("topic").value;

  const message = `
📩 Нова заявка!
👤 Імʼя: ${name}
📱 Контакт: ${phone}
💬 Запит: ${topic}
`;

  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  document.getElementById("formMessage").textContent = "✅ Заявку відправлено!";
}
