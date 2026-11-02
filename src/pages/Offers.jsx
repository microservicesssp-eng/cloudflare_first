import { useState } from "react";
import PageHero from "../components/PageHero";
import TomatoIcon from "../components/TomatoIcon";
import { sendOffer } from "../api";

const OFFERS = [
  { title: "Томатная паста", text: "Концентрация 28–30% и 36–38%. Бочки 220 кг, ведра 5 кг, банки 850 г." },
  { title: "Резаные томаты", text: "Кубики и дольки в собственном соку. Банки 400 г, 800 г, 2,5 кг и 3 кг." },
  { title: "Томатные соусы", text: "Классический, острый, пицца-соус, кетчуп. Своя торговая марка возможна." },
];

const EMPTY = { name: "", company: "", contact: "", comment: "" };

export default function Offers() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await sendOffer(form); // заглушка "#" из config.js
    setSent(true);
    setForm(EMPTY);
  };

  return (
    <>
      <PageHero
        title="Наши предложения"
        subtitle="Выгодные условия для оптовых покупателей."
      />
      <section className="section">
        <h2>Что мы предлагаем</h2>
        <div className="cards">
          {OFFERS.map((o) => (
            <article key={o.title} className="card">
              <TomatoIcon size={44} />
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </article>
          ))}
        </div>
        <p>
          Скидки от 5 тонн, отсрочка платежа для постоянных клиентов, доставка
          по всей стране собственным транспортом.
        </p>
      </section>

      <section className="section">
        <h2>Принять предложение</h2>
        <form className="form" onSubmit={submit}>
          <label>
            Ваше имя
            <input name="name" value={form.name} onChange={change} required />
          </label>
          <label>
            Компания
            <input name="company" value={form.company} onChange={change} required />
          </label>
          <label>
            Телефон или e-mail
            <input name="contact" value={form.contact} onChange={change} required />
          </label>
          <label>
            Продукция и объём
            <textarea name="comment" rows="3" value={form.comment} onChange={change} />
          </label>
          <button type="submit">Отправить заявку</button>
          {sent && <p className="form__ok">Спасибо! Мы свяжемся с вами в ближайшее время.</p>}
        </form>
      </section>
    </>
  );
}
