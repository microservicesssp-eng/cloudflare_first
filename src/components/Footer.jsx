import TomatoIcon from "./TomatoIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <TomatoIcon size={20} />
      <span>© {new Date().getFullYear()} ТоматОпт. Оптовые поставки томатной продукции.</span>
    </footer>
  );
}
