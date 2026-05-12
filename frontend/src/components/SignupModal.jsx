import { useForm } from "react-hook-form";
import "./SignupModal.css";
import apiRequest from "../services/axios/config";
import { useState } from "react";

export default function SignupModal({ setIsSignupModalOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      password: "",
      passwordConfrim: "",
      sessions: -1,
      checkTerms: false,
    },
  });

  const handleModalClose = (e) => {
    const target = e.target;
    if (target.classList.contains("backdrop")) {
      setIsSignupModalOpen(false);
    }
  };

  const handleSignup = async (data) => {
    if (data.password !== data.passwordConfrim) {
      setPassError("رمزعبور یکسان نیست!");
      return;
    }
    setIsLoading(true);
    try {
      const res = await apiRequest.post("/auth/register", {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        password: data.password,
        sessions: +data.sessions,
        planType: "Monthly",
      });
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      setError("مشکلی پیش اومد.");
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="backdrop" onClick={handleModalClose}>
      <form className="signup-modal" onSubmit={handleSubmit(handleSignup)}>
        <p className="signup-modal__title">ثبت نام ورزشکار</p>
        <input
          type="text"
          {...register("fullName", {
            required: "وارد کردن نام اجباری است.",
          })}
          name="fullName"
          className="signup-modal__inputs"
          placeholder="نام و نام‌خانوادگی"
        />
        {errors.fullName && (
          <p className="signup-modal__error">{errors.fullName.message}</p>
        )}
        <input
          type="number"
          {...register("phoneNumber", {
            required: "وارد کردن شماره موبایل اجباری است.",
            minLength: {
              value: 11,
              message: "شماره شما نباید از ۱۱ رقم کمتر باشد.",
            },
            maxLength: {
              value: 11,
              message: "شماره شما نباید از ۱۱ رقم بیشتر باشد.",
            },
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
              message: "شماره شما معتبر نمی‌باشد.",
            },
          })}
          name="phoneNumber"
          className="signup-modal__inputs"
          placeholder="شماره موبایل"
        />
        {errors.phoneNumber && (
          <p className="signup-modal__error">{errors.phoneNumber.message}</p>
        )}
        <input
          type="password"
          {...register("password", {
            required: "وارد کردن رمز عبور اجباری می‌باشد.",
            minLength: {
              value: 8,
              message: "رمز عبور نباشد کمتر از ۸ کاراکتر باشد.",
            },
            maxLength: {
              value: 128,
              message: "رمز عبور نباشد بیشتر از ۱۲۸ کاراکتر باشد.",
            },
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-.]).{8,}$/g,
              message:
                "رمز عبور باید ترکیبی از حروف بزرگ و کوچک، عدد و علامت باشد.",
            },
          })}
          name="password"
          className="signup-modal__inputs"
          placeholder="رمز عبور"
        />
        {errors.password && (
          <p className="signup-modal__error">{errors.password.message}</p>
        )}
        <input
          type="password"
          {...register("passwordConfrim", {
            required: "تکرار کردن رمز عبور اجباری می‌باشد.",
          })}
          name="passwordConfrim"
          className="signup-modal__inputs"
          placeholder="تکرار رمز عبور"
        />
        {passError && <p className="signup-modal__error">{passError}</p>}
        {errors.passwordConfrim && (
          <p className="signup-modal__error">
            {errors.passwordConfrim.message}
          </p>
        )}
        <select
          name="sessions"
          {...register("sessions", {
            validate: (value) => {
              return +value !== -1 || "لطفا تعداد جلسات را انتخاب کنید.";
            },
          })}
          defaultValue="-1"
          className="signup-modal__select"
        >
          <option value={-1} className="signup-modal__options">
            تعداد جلسات خود را انتخاب کنید
          </option>
          <option value={12} className="signup-modal__options">
            ۱۲ جلسه در ماه
          </option>
          <option value={16} className="signup-modal__options">
            ۱۶ جلسه در ماه
          </option>
          <option value={26} className="signup-modal__options">
            ۲۶ جلسه در ماه
          </option>
        </select>
        {errors.sessions && (
          <p className="signup-modal__error">{errors.sessions.message}</p>
        )}
        <div className="signup-modal__terms">
          <input
            type="checkbox"
            {...register("checkTerms", {
              required: "پذیرش قوانین اجباری است.",
            })}
            name="checkTerms"
            className="signup-modal__checkbox"
          />
          <label htmlFor="checkTerms" className="signup-modal__label">
            قوانین و مقرارت را میپذیرم.
          </label>
        </div>
        {errors.checkTerms && (
          <p className="signup-modal__error">{errors.checkTerms.message}</p>
        )}
        <button
          type="submit"
          className="btn-primary signup-modal__sumbit"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "درحال بررسی..." : "ثبت نام"}
        </button>
        {error && <p className="text-error">{error}</p>}
      </form>
    </div>
  );
}
