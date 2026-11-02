import { useState } from "react";
import TomatoIcon from "./TomatoIcon";
import { connectChat, sendChatMessage } from "../api";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { from: "company", text: "Здравствуйте! Чем можем помочь? Задайте вопрос об оптовых поставках." },
  ]);

  const toggle = async () => {
    const next = !open;
    setOpen(next);
    // При первом открытии активируем связь с backend (пока заглушка "#")
    if (next && !connected) {
      await connectChat();
      setConnected(true);
    }
  };

  const send = async (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { from: "me", text: value }]);
    setText("");
    await sendChatMessage(value);
    // Заглушка ответа, пока нет backend
    setMessages((m) => [
      ...m,
      { from: "company", text: "Спасибо! Менеджер ответит вам в ближайшее время." },
    ]);
  };

  return (
    <div className="chat">
      {open && (
        <div className="chat__window" role="dialog" aria-label="Онлайн-чат с компанией">
          <div className="chat__head">
            <TomatoIcon size={24} />
            <strong>Чат с компанией ТоматОпт</strong>
            <button className="chat__close" onClick={toggle} aria-label="Закрыть чат">×</button>
          </div>
          <div className="chat__body">
            {messages.map((m, i) => (
              <div key={i} className={"msg msg--" + m.from}>{m.text}</div>
            ))}
          </div>
          <form className="chat__form" onSubmit={send}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введите сообщение..."
            />
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
      <button className="chat__launcher" onClick={toggle}>
        <TomatoIcon size={28} />
        <span>Онлайн-чат с компанией</span>
      </button>
    </div>
  );
}
