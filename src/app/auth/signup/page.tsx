"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
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
      {/* -------- signup form -------- */}
      <form className="w-full max-w-[50%] flex flex-col gap-6">
        {/* -------- hospital name -------- */}
        <div className="font-Inter flex flex-col gap-2">
          <label
            htmlFor="hospital-name"
            className="text-[#332EOE] font-bold text-2xl"
          >
            Healthcare Facility Name
          </label>
          <input
            type="text"
            id="hospital-name"
            name="hospital-name"
            className="border border-solid border-[#D9D9D9] rounded-md h-[3.75rem] w-full py-2.5 px-5 focus:outline-none autofill:bg-none"
          />
        </div>
        {/* -------- hospital email -------- */}
        <div className="font-Inter flex flex-col gap-2">
          <label
            htmlFor="hospital-email"
            className="text-[#332EOE] font-bold text-2xl"
          >
            Email
          </label>
          <input
            type="text"
            id="hospital-email"
            name="hospital-email"
            className="border border-solid border-[#D9D9D9] rounded-md h-[3.75rem] w-full py-2.5 px-5 focus:outline-none autofill:bg-none"
          />
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
              name="hospital-password"
              className="border border-solid border-[#D9D9D9] rounded-md h-[3.75rem] w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none"
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
        </div>
        {/* -------- hospital confirm password -------- */}
        <div className="font-Inter flex flex-col gap-2">
          <label
            htmlFor="hospital-confirm-password"
            className="text-[#332EOE] font-bold text-2xl"
          >
            Password
          </label>
          <div className="w-full relative flex items-center">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="hospital-confirm-password"
              name="hospital-confirm-password"
              className="border border-solid border-[#D9D9D9] rounded-md h-[3.75rem] w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none"
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
        </div>
        {/* -------- sign up submit button -------- */}
        <button className="w-full bg-primaryGreen p-2.5 text-xl text-[#FFFADE] font-bold rounded-[6px] flex justify-center items-center focus:outline-none autofill:bg-none">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
