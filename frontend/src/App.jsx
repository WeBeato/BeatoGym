import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrap">
            <div className="hero__content">
              <h1 className="hero__title">بـیـتـوجـیــــــم</h1>
              <h2 className="hero__subtitle">تمرین هوشمندانه، نتیجه‌ی بهتر!</h2>
              <p className="hero__cta">
                همین حالا ثبت‌نام کن و اولین جلسه‌ت رو رایگان تجربه کن.
              </p>
              <a href="#" className="hero__btn">
                ثبت‌نام
              </a>
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
    </>
  );
}

export default App;
