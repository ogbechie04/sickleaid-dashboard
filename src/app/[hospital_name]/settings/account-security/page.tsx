"use client";

import React, { useState } from "react";
import { FiAlertCircle, FiChevronLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import {
  passwordResetFormData,
  passwordResetSchema,
} from "@/features/auth/passwordResetSchema";
import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TwoFactorAuth from "@/components/AccountSecurityComponents/TwoFactorAuth";

const AccountSecurity = () => {
  const router = useRouter();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleShowCurrentPassword = () => {
    setShowCurrentPassword((prev) => !prev);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };
  const handleShowConfirmNewPassword = () => {
    setShowConfirmNewPassword((prev) => !prev);
  };

  const {
    register: passwordRegister,
    handleSubmit: passwordHandleSubmit,
    formState: { errors: passwordErrors },
  } = useForm<passwordResetFormData>({
    resolver: zodResolver(passwordResetSchema),
    mode: "onSubmit",
  });

  const submitData = (data: passwordResetFormData) => {
    console.log("submitted data:", data);
    router.push("/[hospital_name]/settings");
  };

  return (
    <div className="pl-[2.875rem] pr-[5.4375rem] pt-[1.9375rem] pb-[6.1875rem] flex w-full flex-col gap-[2.125rem]">
      {/* -------- heading and back button -------- */}
      <div className="flex items-center gap-[1.625rem]">
        <button
          className="flex items-center justify-center"
          onClick={() => router.push("/[hospital_name]/settings")}
        >
          <FiChevronLeft size={32} className="" />
        </button>
        <p className="text-black text-[30px] font-bold">Account Security</p>
      </div>

      {/* -------- main password code -------- */}
      <div className="flex flex-col w-full">
        <p className="font-bold text-xl">Change Password</p>
        {/* -------- password reset form -------- */}
        <form
          className="w-full h-full flex flex-col justify-center gap-6 mt-6"
          onSubmit={passwordHandleSubmit(submitData)}
        >
          {/* -------- current password --------- */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="current-password"
              className="text-[#332EOE] font-bold text-base"
            >
              Current Password:
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="current-password"
                className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                  passwordErrors.currentPassword
                    ? "border-[var(--danger)] text-[var(--danger)]"
                    : "border-[#D9D9D9] text-black"
                }`}
                {...passwordRegister("currentPassword")}
              />
              <button
                type="button"
                className="absolute right-[1.3125rem]"
                onClick={handleShowCurrentPassword}
              >
                {showCurrentPassword ? (
                  <FiEye size={20} color="#332E0E" />
                ) : (
                  <FiEyeOff size={20} color="#332E0E" />
                )}
              </button>
            </div>
            {passwordErrors.currentPassword && (
              <div className="flex gap-[7px] text-[var(--danger)] items-center">
                <FiAlertCircle size={"18px"} />
                <p className="text-sm leading-normal">
                  {passwordErrors.currentPassword.message}
                </p>
              </div>
            )}
          </div>
          {/* -------- new password --------- */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="new-password"
              className="text-[#332EOE] font-bold text-base"
            >
              New Password:
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showNewPassword ? "text" : "password"}
                id="current-password"
                className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                  passwordErrors.newPassword
                    ? "border-[var(--danger)] text-[var(--danger)]"
                    : "border-[#D9D9D9] text-black"
                }`}
                {...passwordRegister("newPassword")}
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
            {passwordErrors.newPassword && (
              <div className="flex gap-[7px] text-[var(--danger)] items-center">
                <FiAlertCircle size={"18px"} />
                <p className="text-sm leading-normal">
                  {passwordErrors.newPassword.message}
                </p>
              </div>
            )}
          </div>
          {/* -------- confirm new password --------- */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirm-new-password"
              className="text-[#332EOE] font-bold text-base"
            >
              Confirm Password:
            </label>
            <div className="w-full relative flex items-center">
              <input
                type={showConfirmNewPassword ? "text" : "password"}
                id="confirm-new-password"
                className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                  passwordErrors.confirmPassword
                    ? "border-[var(--danger)] text-[var(--danger)]"
                    : "border-[#D9D9D9] text-black"
                }`}
                {...passwordRegister("confirmPassword")}
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
            {passwordErrors.confirmPassword && (
              <div className="flex gap-[7px] text-[var(--danger)] items-center">
                <FiAlertCircle size={"18px"} />
                <p className="text-sm leading-normal">
                  {passwordErrors.confirmPassword.message}
                </p>
              </div>
            )}
          </div>
        </form>

        {/* -------- two factor authentification code -------- */}
        <div className="mt-[3.8125rem] flex justify-between gap-2">
            <TwoFactorAuth />
        </div>
      </div>
    </div>
  );
};

export default AccountSecurity;
