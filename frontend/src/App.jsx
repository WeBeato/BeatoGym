import "./App.css";
import Counter from "./components/Counter";
import gymBody from "../public/pics/gym-body.jpg";
import gymBody2 from "../public/pics/gym-body2.jpg";
import { CgCircleci, CgGym } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

function App() {
  const plans = [
    {
      id: "starter",
      title: "پلن پایه",
      price: 790_000,
      desc: "برای کسانی که تازه می‌خوان شروع کنن.",
      sessions: 12,
      sessionsPerWeek: 3,
      features: [
        "دسترسی به سالن اصلی",
        "استفاده از دستگاه‌های هوازی و وزنه",
        "دوش و کمد شخصی",
        "بدون دسترسی به کلاس‌های گروهی",
        "بدون مربی اختصاصی",
      ],
      isPopular: false,
      btn: "secondary-btn",
    },
    {
      id: "pro",
      title: "پلن حرفه‌ای",
      price: 1_900_000,
      desc: "کامل‌ترین تجربه‌ای برای کسانی که جدی تمرین میکنن.",
      sessions: 16,
      sessionsPerWeek: 4,
      features: [
        "دسترسی به کل باشگاه",
        "۴ جلسه مربی اختصاصی",
        "شرکت در کلاس‌های گروهی",
        "استفاده از سونا و جکوزی",
        "برنامه غذایی اولیه",
      ],
      isPopular: true,
      btn: "btn-primary",
    },
    {
      id: "elite",
      title: "پلن الیت (vip)",
      price: 3_330_000,
      desc: "تجربه لوکس و vip با تمام امکانات و پشتیبانی شخصی.",
      sessions: 26,
      sessionsPerWeek: 6,
      features: [
        "دسترسی به کل باشگاه + ورود vip",
        "۸ جلسه مربی اختصاصی",
        "کلاس های خصوصی نامحدود",
        "خدمات ریکاوری پیشرفته",
        "دعوت از مهمان (ماهانه ۲ نفر)",
      ],
      isPopular: false,
      btn: "secondary-btn",
    },
  ];

  return (
    <>
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
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero__wrap">
              <div className="hero__content">
                <h1 className="hero__title">بـیـتـوجـیــــــم</h1>
                <h2 className="hero__subtitle">به ریتم خودت تمرین کن!</h2>
                <p className="hero__cta">
                  همین حالا ثبت‌نام کن و اولین جلسه‌ت رو رایگان تجربه کن.
                </p>
                <button className="btn-primary hero__btn">ثبت‌نام</button>
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
        <section className="about" id="about">
          <div className="container">
            <h2 className="about__title">
              بـیـتـو<span>جـیــــــم</span>؛
              <br />
            </h2>
            <h3 className="about__subtitle">ریتم بدن تو، قدرت تمرین تو</h3>
            <div className="about__content">
              <img src={gymBody} alt="beatogym" className="about__img" />
              <div className="about__text">
                <p>
                  در بـیـتـوجـیـم، ما باور داریم که هر حرکت باید با ریتم قلبت
                  هماهنگ باشه. فضایی طراحی شده با تم طلایی و مدرن، جایی که
                  تکنولوژی و زیبایی در هم تنیده‌ان تا بهترین تجربه تمرین رو برات
                  بسازیم. اینجا، تمرین کردن فقط یه عادت نیست؛ یه آهنگه که تو
                  رهبرش هستی.
                </p>
              </div>
              <div className="fade__box"></div>
            </div>
            <div className="about__content content2">
              <img src={gymBody2} alt="beatogym" className="about__img" />
              <div className="about__text">
                <p>
                  تجهیزات هوشمند، مربیان حرفه‌ای و فضایی که نفس‌هات رو آزاد
                  می‌کنه. ما در بـیـتـوجـیـم باور داریم که بدن تو لایق یه ریتم
                  خاصه. از سالن‌های عظیم با تهویه هوشمند گرفته تا بخش‌های
                  ریکاوری پیشرفته، همه چیز برای هماهنگی کامل تو با هدف‌هات طراحی
                  شده.
                </p>
              </div>
              <div className="fade__box"></div>
            </div>
            <div className="about__feautures">
              <p className="about__feauture">
                <CgGym className="about__feauture-icon" />
                تجهیزات هوشمند: همانگی کامل با ریتم تمرین تو.
              </p>
              <p className="about__feauture">
                <FaHome className="about__feauture-icon" />
                فضای لوکس: طراحی مدرن برای تمرکز و انرژی.
              </p>
              <p className="about__feauture">
                <BsFillPersonFill className="about__feauture-icon" />
                مربیان متخصص: همراهی برای پیدا کردن ریتم شخصی تو.
              </p>
            </div>
          </div>
        </section>
        <section className="plans" id="plans">
          <div className="container">
            <h2 className="plans__title">پلن های اشتراک بـیـتـوجـیـم:</h2>
            <div className="plans__wrap">
              {plans &&
                plans.map((plan) => (
                  <div
                    className={`plan ${plan.isPopular ? "plan--popular" : ""}`}
                    key={plan.id}
                  >
                    <h3 className="plan__title">{plan.title}</h3>
                    <p className="plan__price">
                      {plan.price.toLocaleString("fa", "ir")} تومان / ماه
                    </p>
                    <p className="plan__desc">{plan.desc}</p>
                    <div className="plan__sessions">
                      <span className="plan__total-sessions">
                        {plan.sessions.toLocaleString("fa", "ir")}
                      </span>
                      جلسه در ماه
                      <span className="plan__sessions-perweek">
                        ({plan.sessionsPerWeek.toLocaleString("fa", "ir")} جلسه
                        در هفته)
                      </span>
                    </div>
                    <ul className="plan__features">
                      {plan.features.map((feet) => (
                        <li className="plan__feature">
                          <CgCircleci className="plan__feature-icon" />
                          {feet}
                        </li>
                      ))}
                    </ul>
                    <button className={`${plan.btn} plan__btn`}>
                      انتخاب پلن
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
