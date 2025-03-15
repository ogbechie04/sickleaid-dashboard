"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

  return (
    <div className="pl-[1.875rem] pr-[5.625rem] pt-[2.75rem] pb-[6.125rem] flex w-full flex-col gap-8">
      <p className="text-black text-[30px] font-bold uppercase">Settings</p>
      {/* -------- setting buttons -------- */}
      <div className="flex flex-col w-full gap-[2.0625rem]">
        {/* -------- account security button -------- */}
        <button
          className="text-2xl font-normal text-black bg-white p-2.5 rounded-md shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] w-[17.1875rem]"
          onClick={() =>
            router.push("/[hospital_name]/settings/account-security")
          }
        >
          Account Security
        </button>
        {/* -------- notification settings button -------- */}
        <button className="text-2xl font-normal text-black bg-white p-2.5 rounded-md shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] w-[17.1875rem]">
          Notification Settings
        </button>
        {/* -------- language preferences button -------- */}
        <button className="text-2xl font-normal text-black bg-white p-2.5 rounded-md shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] w-[17.1875rem]">
          Language Preferences
        </button>
        {/* -------- resource section button -------- */}
        <button className="text-2xl font-normal text-black bg-white p-2.5 rounded-md shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] w-[17.1875rem]">
          Resource Section
        </button>
      </div>
    </div>
  );
};

export default Settings;
