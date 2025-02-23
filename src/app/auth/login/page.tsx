"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="font-Inter flex justify-between">
      {/* -------- left side of the page -------- */}
      <div className="flex flex-col gap-12 w-full pl-8 pr-[1.875rem] pt-[2.6875rem] pb-[7.5rem] max-w-[53%]">
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
          <form action="" className="w-full flex flex-col gap-6">
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

            {/* -------- forgot password -------- */}
            <p className="text-xl font-medium">
              Forgot password?&nbsp;
              <span className="text-primaryGreen cursor-pointer">
                Reset here
              </span>
            </p>

            {/* -------- login submit button -------- */}
            <button className="w-full bg-primaryGreen p-2.5 text-xl text-[#FFFADE] font-bold rounded-[6px] flex justify-center items-center focus:outline-none autofill:bg-none">
              Login
            </button>
          </form>
        </div>
      </div>
      {/* -------- right image -------- */}
      <div className="w-full h-full">
        {/* <Image
          src="/images/login-image.svg"
          alt="onboarding"
          width={500}
          height={400}
          className="w-full h-fit"
        /> */}
      </div>
    </div>
  );
};

export default Login;
