"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import {
  loginSchema,
  loginFormData,
} from "../../../../features/auth/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Login: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  //   -------- schema validation --------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const submitData = (data: loginFormData) => {
    console.log("submitted data:", data);
    router.push("/");
  };

  return (
    <div className="font-Inter flex justify-between h-fit">
      {/* -------- left side of the page -------- */}
      <div className="flex flex-col gap-12 w-full pl-8 pr-[1.875rem] pt-[2.6875rem] pb-[7.5rem] ">
        {/* -------- sickle aid logo --------- */}
        <div className="p-2.5">
          <Image
            src="/logos/onboarding-logo2.svg"
            alt="onboarding"
            width={140}
            height={100}
          />
        </div>
        {/* -------- login form --------- */}
        <div className="self-center w-full flex flex-col items-center border border-primaryGreen rounded-[1.875rem] pb-[6.25rem] pt-3 px-9 gap-[5.125rem]">
          <h1 className="text-5xl font-bold text-primaryGreen font-Inter p-2.5">
            Welcome Back
          </h1>
          <form action="" className="w-full flex flex-col gap-6" onSubmit={handleSubmit(submitData)}>
            {/* -------- hospital email -------- */}
            <div className="font-Inter flex flex-col gap-2 w-full">
              <label
                htmlFor="hospital-email"
                className="text-[#332EOE] font-bold text-2xl"
              >
                Email
              </label>
              <input
                type="text"
                id="hospital-email"
                className={`border border-solid rounded-md h-[3.75rem] w-full py-2.5 px-5 focus:outline-none autofill:bg-none ${
                  errors.hospitalEmail
                    ? "border-[var(--danger)] text-[var(--danger)]"
                    : "border-[#D9D9D9] text-black"
                }`}
                {...register("hospitalEmail")}
              />
              {errors.hospitalEmail && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.hospitalEmail.message}
                  </p>
                </div>
              )}
            </div>

            {/* -------- hospital password -------- */}
            <div className="font-Inter flex flex-col gap-2">
              <label
                htmlFor="hospital-password"
                className="text-[#332EOE] font-bold text-2xl"
              >
                Password
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="hospital-password"
                  className={`border border-solid rounded-md h-[3.75rem] w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.hospitalPassword
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("hospitalPassword")}
                />
                <button
                  type="button"
                  className="absolute right-[1.3125rem]"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <FiEye size={20} color="#332E0E" />
                  ) : (
                    <FiEyeOff size={20} color="#332E0E" />
                  )}
                </button>
              </div>
              {errors.hospitalPassword && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.hospitalPassword.message}
                  </p>
                </div>
              )}
            </div>

            {/* -------- forgot password -------- */}
            <p className="text-xl font-medium mt-[3.0625rem]">
              Forgot password?&nbsp;
              <span
                className="text-primaryGreen cursor-pointer"
                onClick={() => router.push("/auth/reset-password")}
              >
                Reset here
              </span>
            </p>

            {/* -------- login submit button -------- */}
            <button
              className="w-full bg-primaryGreen p-2.5 text-xl mt-[1.8125rem] text-[#FFFADE] font-bold rounded-[6px] flex justify-center items-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* -------- right image -------- */}
      <div className="w-full h-full max-h-[64rem] flex justify-end">
        <Image
          src="/images/login-image.svg"
          alt="onboarding"
          width={800}
          height={400}
          className="w-full h-full w-h-[64rem] self-end justify-end"
        />
      </div>
    </div>
  );
};

export default Login;
