import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <button className="secondary-btn header__btn">ورود</button>
          <ul className="menu">
            <li className="menu__item">
              <a href="#hero" className="menu__link">
                خانه
              </a>
            </li>
            <li className="menu__item">
              <a href="#about" className="menu__link">
                درباره
              </a>
            </li>
            <li className="menu__item">
              <a href="#plans" className="menu__link">
                اشتراک‌ها
              </a>
            </li>
          </ul>
          <p className="headr__logo">
            Beato<span>Gym</span>
          </p>
        </nav>
      </div>
    </header>
  );
}
