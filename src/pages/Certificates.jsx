import PageHero from "../components/PageHero";

export default function Certificates() {
  return (
    <>
      <PageHero
        title="Наши сертификаты"
        subtitle="Качество нашей продукции подтверждено документами."
      />
      <section className="section">
        <h2>Качество и безопасность</h2>
        <p>
          Вся продукция проходит многоступенчатый контроль качества и соответствует
          требованиям технических регламентов. Мы работаем по системам менеджмента
          качества и безопасности пищевой продукции и ежегодно подтверждаем
          сертификаты независимыми аудиторами.
        </p>
        <div className="certs">
          {/* Файлы лежат в public/certificates — замените на реальные сканы с теми же именами */}
          <figure>
            <img src="/certificates/certificate-1.jpeg" alt="Сертификат 1" />
            <figcaption>Сертификат соответствия №1</figcaption>
          </figure>
          <figure>
            <img src="/certificates/certificate-2.jpeg" alt="Сертификат 2" />
            <figcaption>Сертификат соответствия №2</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
