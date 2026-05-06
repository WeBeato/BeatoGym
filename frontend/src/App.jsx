import "./App.css";
import Counter from "./components/Counter";

function App() {

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <button className="secondary-btn header__btn">
              ورود
            </button>
            <ul className="menu">
              <li className="menu__item">
                <a href="#hero" className="menu__link">خانه</a>
              </li>
              <li className="menu__item">
                <a href="#about" className="menu__link">درباره</a>
              </li>
              <li className="menu__item">
                <a href="#subscriptions" className="menu__link">اشتراک‌ها</a>
              </li>
            </ul>
            <p className="headr__logo">
              Beato<span>Gym</span>
            </p>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero__wrap">
              <div className="hero__content">
                <h1 className="hero__title">بـیـتـوجـیــــــم</h1>
                <h2 className="hero__subtitle">
                  تمرین هوشمندانه، نتیجه‌ی بهتر!
                </h2>
                <p className="hero__cta">
                  همین حالا ثبت‌نام کن و اولین جلسه‌ت رو رایگان تجربه کن.
                </p>
                <button className="btn-primary hero__btn">
                  ثبت‌نام
                </button>
              </div>
              <div className="hero__statistic">
                <div className="hero__foundation">
                  <p className="hero__foundation-num">
                    <Counter targetNum={1404} startingNum={1000} />
                  </p>
                  <p className="hero__foundation-text">تاسیس</p>
                </div>
                <div className="hero__athletes">
                  <p className="hero__athletes-num">
                    <Counter targetNum={120} />
                  </p>
                  <p className="hero__athletes-text">ورزشکاران</p>
                </div>
                <div className="hero__hour">
                  <p className="hero__hour-num">
                    <Counter targetNum={12} /> تا <Counter targetNum={24} />
                  </p>
                  <p className="hero__hour-text">ساعت کاری</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__fade"></div>
        </section>
      </main>
    </>
  );
}

export default App;
