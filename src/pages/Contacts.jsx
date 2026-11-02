import PageHero from "../components/PageHero";
import { COMPANY } from "../config";

export default function Contacts() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY.mapQuery
  )}&z=15&output=embed`;

  return (
    <>
      <PageHero title="Контакты" subtitle="Свяжитесь с нами удобным способом." />
      <section className="section contacts">
        <div>
          <h2>Где мы находимся</h2>
          <p>{COMPANY.address}</p>
          <h2>Телефоны</h2>
          {COMPANY.phones.map((p) => (
            <p key={p}>
              <a href={`tel:${p.replace(/[^+\d]/g, "")}`}>{p}</a>
            </p>
          ))}
          <p>
            E-mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
          <p>Часы работы: пн–пт, 9:00–18:00</p>
        </div>
        <iframe
          className="map"
          title="Карта Google"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
