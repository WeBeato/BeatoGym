import "./LoginModal.css";
import { useForm } from "react-hook-form";
import apiRequest from "../services/axios/config";
import { useState } from "react";

export default function LoginModal({ setIsLoginModalOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const handleModalClose = (e) => {
    const target = e.target;
    if (target.classList.contains("backdrop")) {
      setIsLoginModalOpen(false);
    }
  };

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      const res = await apiRequest.post("/auth/login", {
        phoneNumber: data.phone,
        password: data.password,
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
      <form className="login-modal" onSubmit={handleSubmit(handleLogin)}>
        <p className="login-modal__title">ورود ورزشکار</p>

        <input
          type="number"
          className="login-modal__inputs"
          {...register("phone", {
            required: "وارد کردن شماره اجباری می‌باشد.",
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
          name="phone"
          placeholder="شماره خود را وارد نمایید..."
        />
        {errors.phone && (
          <p className="login-modal__error">{errors.phone.message}</p>
        )}
        <input
          type="password"
          className="login-modal__inputs"
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
          placeholder="رمزعبور خود را وارد نمایید..."
        />
        {errors.password && (
          <p className="login-modal__error">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="btn-primary login-modal__sumbit"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "درحال بررسی..." : "ورود"}
        </button>
        {error && <p className="text-error">{error}</p>}
      </form>
    </div>
  );
}
