"use client";

import CustomCalendar from "@/components/DashboardComponents/CustomCalendar";
import HospitalAppointments from "@/components/DashboardComponents/HospitalAppointments";
import Reports from "@/components/DashboardComponents/Reports";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const HospitalDashboard = () => {
  const router = useRouter();

  return (
    <div className="pl-[2.875rem] pt-[2.875rem] flex w-full">
      {/* -------- left half -------- */}
      <div className="flex flex-col w-full">
        {/* -------- greetings and doc image -------- */}
        <div className="flex items-center justify-items-center gap-[9.75rem]">
          {/* -------- greetings -------- */}
          <div className="flex flex-col gap-2.5 text-black">
            <p className="font-bold text-4xl">Good Morning</p>
            <p className="font-semibold text-3xl">Have a nice day!</p>
          </div>
          {/* -------- doctors image -------- */}
          <div>
            <Image
              src="/images/dashboard-doctors-image.svg"
              alt="doctor"
              width={92}
              height={200}
            />
          </div>
        </div>
        {/* -------- hospital reports -------- */}
        <div className="mt-[5.8125rem]">
          <Reports />
        </div>
        {/* -------- patients table/hospital appointments -------- */}
        <div className="mt-[4.125rem] w-full">
          <HospitalAppointments />
        </div>
      </div>
      {/* -------- right half -------- */}
      <div className="flex flex-col gap-[2.9375rem] items-center w-full">
        {/* -------- add patient button -------- */}
        <button
          className="flex items-center justify-center px-5 py-2.5 bg-primaryGreen rounded-[0.625rem] text-xl font-semibold text-white w-fit"
          onClick={() =>
            router.push(`/${localStorage.getItem("hospital-name")}/add-patient`)
          }
        >
          + Add patient
        </button>
        {/* -------- schedule calendar -------- */}
        <div className="flex flex-col items-start gap-4">
          <p className="text-black text-lg font-semibold">Schedule Calendar</p>
          {/* -------- custom calendar -------- */}
          <div className="w-full">
            <CustomCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
