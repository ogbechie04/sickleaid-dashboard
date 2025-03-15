"use client";

import React, { useRef } from "react";
import {
  twoFactorAuthentificationFormData,
  twoFactorAuthentificationSchema,
} from "@features/auth/passwordResetSchema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const TwoFactorAuth = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(12).fill(null));

  const {
    control,
    // register,
    handleSubmit,
    setValue,
    // watch,
    formState: { errors },
  } = useForm<twoFactorAuthentificationFormData>({
    resolver: zodResolver(twoFactorAuthentificationSchema),
    mode: "onSubmit",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    isConfirmPin: boolean = false
  ) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return;
    if (/^\d+$/.test(value) || value === "") {
      const fieldName = isConfirmPin
        ? `confirmPin${index + 1}`
        : `pin${index + 1}`;
      setValue(fieldName as keyof twoFactorAuthentificationFormData, value);
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    isConfirmPin: boolean = false
  ) => {
    const fieldName = isConfirmPin
      ? `confirmPin${index + 1}`
      : `pin${index + 1}`;
    if (e.key === "Backspace" || e.key === "Delete") {
      setValue(fieldName as keyof twoFactorAuthentificationFormData, "");
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const onSubmit = (data: twoFactorAuthentificationFormData) => {
    console.log("Submitted 2FA Data:", data);
  };

  return (
    <form
      className="flex justify-between gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* -------- main 2fa code -------- */}
      <div className="flex flex-col gap-[2.375rem]">
        {/* -------- 2fa input -------- */}
        <div className="flex flex-col gap-8">
          <p className="font-bold text-xl">Two factor authentication code</p>
          <div className="flex justify-between w-full gap-6">
            {[...Array(6)].map((_, index) => (
              <Controller
                key={index}
                name={
                  `pin${index + 1}` as keyof twoFactorAuthentificationFormData
                }
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    className={`w-[4.6875rem] h-[4.6875rem] border border-solid border-primaryGreen rounded-[0.9375rem] bg-[var(--secondary-text-color)] p-2.5 text-center flex justify-center items-center text-2xl leading-[20px] focus:outline-none autofill:bg-none shadow-custom-lg lg:shadow-none`}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                )}
              />
            ))}
          </div>
        </div>

        {/* -------- confirm pin -------- */}
        <div className="flex flex-col gap-8">
          <p className="font-bold text-xl">Confirm Your Pin</p>
          <div className="flex justify-between w-full gap-6">
            {[...Array(6)].map((_, index) => (
              <Controller
                key={index + 6}
                name={
                  `confirmPin${
                    index + 1
                  }` as keyof twoFactorAuthentificationFormData
                }
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    ref={(el) => {
                      if (el) inputRefs.current[index + 6] = el;
                    }}
                    type="text"
                    maxLength={1}
                    className={`w-[4.6875rem] h-[4.6875rem] border border-solid border-primaryGreen rounded-[0.9375rem] bg-[var(--secondary-text-color)] p-2.5 text-center flex justify-center items-center text-2xl leading-[20px] focus:outline-none autofill:bg-none shadow-custom-lg lg:shadow-none`}
                    onChange={(e) => handleInputChange(e, index + 6, true)}
                    onKeyDown={(e) => handleKeyDown(e, index + 6, true)}
                  />
                )}
              />
            ))}
          </div>
          {errors.confirmPin1 && (
            <p className="text-red-500 text-sm">{errors.confirmPin1.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-primaryGreen text-white py-2 px-4 rounded-lg mt-4"
      >
        Verify
      </button>
    </form>
  );
};

export default TwoFactorAuth;
