import HospitalAppointments from "@components/DashboardComponents/HospitalAppointments";
import Reports from "@components/DashboardComponents/Reports";
import Image from "next/image";
import React from "react";

const HospitalDashboard = () => {

  return (
    <div className="pl-[2.875rem] pt-[2.875rem] flex">
      {/* -------- left half -------- */}
      <div className="flex flex-col">
        {/* -------- greetings and doc image -------- */}
        <div className="flex items-center justify-items-center gap-[9.75rem]">
          {/* -------- greetings -------- */}
          <div className="flex flex-col gap-[1.125rem] text-4xl text-black">
            <p className="font-bold">Good Morning</p>
            <p className="font-semibold">Have a nice day!</p>
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
          <HospitalAppointments/>
        </div>
      </div>
      {/* -------- right half -------- */}
      <div className="flex flex-col gap-[2.9375rem] items-center">
        {/* -------- add patient button -------- */}
        <button className="flex items-center justify-center px-5 py-2.5 bg-primaryGreen rounded-[0.625rem] text-xl font-semibold text-white w-fit">
          + Add patient
        </button>
        {/* -------- schedule calendar -------- */}
        <div>
          <p className="text-black text-[32px] font-semibold">
            Schedule Calendar
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
