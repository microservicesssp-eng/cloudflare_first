import { API } from "./config";

async function post(url, data) {
  // Заглушка: пока backend нет, ничего не отправляем
  if (url === "#") {
    console.info("[stub] отправка на сервер:", data);
    return { ok: true, stub: true };
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Вызывается при открытии окна чата — активация связи с backend
export const connectChat = () => post(API.chat, { event: "connect" });

// Сообщение пользователя в чат
export const sendChatMessage = (text) =>
  post(API.chat, { event: "message", text });

// Форма "принять предложение"
export const sendOffer = (formData) => post(API.offer, formData);
