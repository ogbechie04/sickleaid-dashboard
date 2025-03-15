"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen max-w-[10.125rem] flex flex-col bg-primaryGreen rounded-tr-[1.25rem] rounded-br-[1.25rem] gap-1 font-Inter">
      {/* -------- sickleaid logo -------- */}
      <div className="w-full px-5 py-[1.875rem]">
        <Image
          src={"/logos/dashboard-logo.svg"}
          alt="SickleAid"
          width={122}
          height={60}
          layout="intrinsic"
          className="cursor-pointer"
          onClick={() => router.push("/example")}
        />
      </div>
      {/* -------- sidebar menu options -------- */}
      <nav className="flex flex-col w-full">
        {/* -------- home -------- */}
        <div
          className="flex items-center justify-start px-5 py-2.5 border-y border-t-2 border-backgroundYellow gap-2.5 cursor-pointer hover:bg-[#005C26]"
          onClick={() => router.push("/[hospital_name]")}
        >
          <Image
            src={"/icons/home-icon.svg"}
            alt="home"
            width={15}
            height={15}
            layout="intrinsic"
          />
          <p className="font-bold text-backgroundYellow leading-[32px]">Home</p>
        </div>
        {/* -------- notification -------- */}
        <div
          className="flex items-center justify-start px-5 py-2.5 border-y border-backgroundYellow gap-2.5 cursor-pointer hover:bg-[#005C26]"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/icons/bell-icon.svg"}
            alt="notification"
            width={15}
            height={15}
            layout="intrinsic"
          />
          <p className="font-bold text-backgroundYellow leading-[32px]">Notification</p>
        </div>
        {/* -------- settings -------- */}
        <div
          className="flex items-center justify-start px-5 py-2.5 border-y border-backgroundYellow gap-2.5 cursor-pointer hover:bg-[#005C26]"
          onClick={() => router.push("/[hospital_name]/settings")}
        >
          <Image
            src={"/icons/settings-icon.svg"}
            alt="settings"
            width={15}
            height={15}
            layout="intrinsic"
          />
          <p className="font-bold text-backgroundYellow leading-[32px]">Settings</p>
        </div>
        {/* -------- record -------- */}
        <div
          className="flex items-center justify-start px-5 py-2.5 border-y border-backgroundYellow gap-2.5 cursor-pointer hover:bg-[#005C26]"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/icons/record-icon.svg"}
            alt="record"
            width={15}
            height={15}
            layout="intrinsic"
          />
          <p className="font-bold text-backgroundYellow leading-[32px]">Record</p>
        </div>
        {/* -------- contact -------- */}
        <div
          className="flex items-center justify-start px-5 py-2.5 border-y border-b-2 border-backgroundYellow gap-2.5 cursor-pointer hover:bg-[#005C26]"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/icons/call-icon.svg"}
            alt="onboarding"
            width={15}
            height={15}
            layout="intrinsic"
          />
          <p className="font-bold text-backgroundYellow leading-[32px]">Contact</p>
        </div>
      </nav>

      {/* -------- log out -------- */}
      <div
        className="mt-auto flex items-center rounded-br-[1.25rem] justify-start px-5 py-3 border-t border-white gap-2.5 cursor-pointer hover:bg-[#005C26]"
        onClick={() => router.push("/")}
      >
        <Image
          src={"/icons/log-out.svg"}
          alt="log-out"
          width={24}
          height={24}
          layout="intrinsic"
        />
        <p className="font-bold text-white">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
