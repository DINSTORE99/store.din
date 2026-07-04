const TELEGRAM_BOT = "8206994792:AAGo26LadC8a86sF9VRiL_Q_S39FCbRMlZQ";
const TELEGRAM_CHAT = "6452266025";

/* DEVICE INFO */
function getInfo() {
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

    return { browser, device };
}

/* TELEGRAM NOTIF */
function sendOpenNotif() {
    const info = getInfo();

    const message = `
🛒 link ig
📱 Device: ${info.device}
🌐 Browser: ${info.browser}
⏰ ${new Date().toLocaleString()}
🔗 ${location.href}
    `;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT,
            text: message
        })
    })
    .then(r => r.json())
    .then(d => console.log("Telegram OK", d))
    .catch(e => console.log("Telegram Error", e));
}

/* AUTO RUN */
window.addEventListener("load", () => {
    sendOpenNotif();
});
