import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="footer__links">
          <li className="footer__link">
            <a href="#hero">خانه</a>
          </li>
          <li className="footer__link">
            <a href="#about">درباره</a>
          </li>
          <li className="footer__link">
            <a href="#plans">اشتراک‌ها</a>
          </li>
        </ul>
        <div className="footer__info">
          <p className="footer__copyright">
            بـیـتـوجـیـم. تمامی حقوق محفوظ است.
          </p>
          <p className="footer__developers">
            Built by <a href="https://github.com/WeBeato">Webeato</a> and{" "}
            <a href="https://github.com/Its-ech">Its-ech</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
