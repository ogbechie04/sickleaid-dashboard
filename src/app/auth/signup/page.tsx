"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { signUpSchema, signUpFormData } from "@features/auth/signUpSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  //   -------- schema validation --------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
  });

  const submitData = (data: signUpFormData) => {
    console.log("submitted data:", data);
    router.push("/[hospital_name]");
  };

  return (
    <div className="my-auto w-full min-h-screen flex items-center gap-[6.25rem] px-[6.875rem] justify-between">
      {/* -------- left logo -------- */}
      <div className="flex items-center justify-center pl-[2.125rem]">
        <Image
          src="/logos/onboarding-logo1.svg"
          alt="onboarding"
          width={486}
          height={330}
        />
      </div>
      {/* -------- right side -------- */}
      <div className="w-full h-full justify-center items-center max-w-[50%] flex flex-col gap-14">
        {/* -------- signup form -------- */}
        <form
          className="w-full h-full flex flex-col justify-center gap-6 max-w-[30rem]"
          onSubmit={handleSubmit(submitData)}
        >
          {/* -------- hospital name -------- */}
          <div className="font-Inter flex flex-col gap-2">
            <label
              htmlFor="hospital-name"
              className="text-[#332EOE] font-bold text-base"
            >
              Healthcare Facility Name
            </label>
            <input
              type="text"
              id="hospital-name"
              className={`border border-solid rounded-md w-full py-2.5 px-5 focus:outline-none autofill:bg-none ${
                errors.hospitalName
                  ? "border-[var(--danger)] text-[var(--danger)]"
                  : "border-[#D9D9D9] text-black"
              }`}
              {...register("hospitalName")}
            />
            {errors.hospitalName && (
              <div className="flex gap-[7px] text-[var(--danger)] items-center">
                <FiAlertCircle size={"18px"} />
                <p className="text-sm leading-normal">
                  {errors.hospitalName.message}
                </p>
              </div>
            )}
          </div>
          {/* -------- hospital email -------- */}
          <div className="font-Inter flex flex-col gap-2">
            <label
              htmlFor="hospital-email"
              className="text-[#332EOE] font-bold text-base"
            >
              Email
            </label>
            <input
              type="text"
              id="hospital-email"
              className={`border border-solid rounded-md w-full py-2.5 px-5 focus:outline-none autofill:bg-none ${
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
              className="text-[#332EOE] font-bold text-base"
            >
              Password
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="hospital-password"
                className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
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
          {/* -------- hospital confirm password -------- */}
          <div className="font-Inter flex flex-col gap-2">
            <label
              htmlFor="hospital-confirm-password"
              className="text-[#332EOE] font-bold text-base"
            >
              Password
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="hospital-confirm-password"
                className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                  errors.hospitalConfirmPassword
                    ? "border-[var(--danger)] text-[var(--danger)]"
                    : "border-[#D9D9D9] text-black"
                }`}
                {...register("hospitalConfirmPassword")}
              />
              <button
                type="button"
                className="absolute right-[1.3125rem]"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? (
                  <FiEye size={20} color="#332E0E" />
                ) : (
                  <FiEyeOff size={20} color="#332E0E" />
                )}
              </button>
            </div>
            {errors.hospitalConfirmPassword && (
              <div className="flex gap-[7px] text-[var(--danger)] items-center">
                <FiAlertCircle size={"18px"} />
                <p className="text-sm leading-normal">
                  {errors.hospitalConfirmPassword.message}
                </p>
              </div>
            )}
          </div>
          {/* -------- sign up submit button -------- */}
          <button
            className="w-full bg-primaryGreen p-2.5 text-lg text-[#FFFADE] font-bold rounded-[6px] flex justify-center items-center focus:outline-none autofill:bg-none"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-base font-Inter">
          Already have an account?{" "}
          <span
            className="text-primaryGreen cursor-pointer font-bold"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
