"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import {
  forgotPasswordSchema,
  forgotPasswordFormData,
} from "@/features/auth/forgotPasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };

  const handleShowConfirmNewPassword = () => {
    setShowConfirmNewPassword((prev) => !prev);
  };

  //   -------- schema validation --------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
  });

  const submitData = (data: forgotPasswordFormData) => {
    console.log("submitted data:", data);
    router.push("/[hospital_name]");
  };

  return (
    <div className="my-auto w-full h-screen flex items-center gap-[6.25rem] px-[6.875rem] justify-between">
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
      <div className="w-full max-w-[50%] flex flex-col items-center gap-14">
        {/* -------- signup form -------- */}
        <form
          className="w-full flex flex-col gap-6 max-w-[30rem]"
          onSubmit={handleSubmit(submitData)}
        >
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

          {/* -------- hospital new password -------- */}
          <div className="font-Inter flex flex-col gap-2">
            <label
              htmlFor="hospital-new-password"
              className="text-[#332EOE] font-bold text-base"
            >
              New Password
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showNewPassword ? "text" : "password"}
                id="hospital-new-password"
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
                onClick={handleShowNewPassword}
              >
                {showNewPassword ? (
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
              Confirm Password
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showConfirmNewPassword ? "text" : "password"}
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
                onClick={handleShowConfirmNewPassword}
              >
                {showConfirmNewPassword ? (
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
          <button className="w-full bg-primaryGreen p-2.5 text-xl text-[#FFFADE] font-bold rounded-[6px] flex justify-center items-center focus:outline-none autofill:bg-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
