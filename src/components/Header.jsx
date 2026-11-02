import { NavLink } from "react-router-dom";
import TomatoIcon from "./TomatoIcon";

const MENU = [
  { to: "/about", label: "О нас" },
  { to: "/offers", label: "Наши предложения" },
  { to: "/certificates", label: "Наши сертификаты" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/about" className="logo">
          <TomatoIcon size={34} />
          <span>ТоматОпт</span>
        </NavLink>
        <nav className="menu">
          {MENU.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "menu__link" + (isActive ? " menu__link--active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
