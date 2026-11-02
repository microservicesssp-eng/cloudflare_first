import TomatoIcon from "./TomatoIcon";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="hero__tomatoes" aria-hidden="true">
        <TomatoIcon size={110} className="t t1" />
        <TomatoIcon size={70} className="t t2" />
        <TomatoIcon size={50} className="t t3" />
      </div>
    </section>
  );
}
