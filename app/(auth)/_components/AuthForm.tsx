"use client";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type AuthFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<AuthFormData>({ mode: "onChange" });

  const password = watch("password");

  const onSubmit = async (data: AuthFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gray-200 px-8 py-12"
    >
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required: {
            value: true,
            message: "이메일을 입력해 주세요",
          },
          pattern: {
            value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            message: "올바른 이메일 주소가 아닙니다",
          },
        })}
        className={`${errors.email ? "border-red-500" : "border-gray-200"}`}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p className="text-red-500">{message}</p>}
      />

      <hr className="border-gray-200 my-4" />

      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: { value: true, message: "비밀번호를 입력해 주세요" },
          validate: {
            length: (value) =>
              (value.length >= 8 && value.length <= 20) ||
              "영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요",
          },
        })}
        className={`${errors.password ? "border-red-500" : "border-gray-200"}`}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p className="text-red-500">{message}</p>}
      />

      <hr className="border-gray-200 my-4" />

      <label htmlFor="confirmPassword">비밀번호 확인</label>
      <input
        type="password"
        id="confirmPassword"
        {...register("confirmPassword", {
          required: "비밀번호를 다시 입력해 주세요",
          validate: (value) =>
            value === password || "비밀번호가 일치하지 않습니다",
        })}
        className={`${errors.password ? "border-red-500" : "border-gray-200"}`}
      />
      <ErrorMessage
        errors={errors}
        name="confirmPassword"
        render={({ message }) => <p className="text-red-500">{message}</p>}
      />

      <button
        className={`btn-primary w-full ${
          isSubmitting ? "cursor-progress" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "전송중..." : "회원가입"}
      </button>
    </form>
  );
}
