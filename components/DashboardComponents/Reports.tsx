import Image from "next/image";
import React from "react";

const Reports = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[32px] font-semibold">Weekly Reports</p>
      {/* -------- report cards and more card -------- */}
      <div className="flex items-center gap-[4.375rem]">
        {/* -------- actual reports -------- */}
        <div className="flex gap-4 items-center">
          {/* -------- total patients -------- */}
          <div className="w-fit flex flex-col gap-[1.875rem] items-center justify-center bg-[#D9D9D9] py-[1.625rem] px-2 rounded-[0.625rem] min-w-[10.625rem]">
            <Image
              src="/icons/patients-icon.svg"
              alt="patient"
              width={25}
              height={25}
            />
            <p className="text-xl font-medium">Total Patients</p>
            <p className="text-xl font-medium">30</p>
          </div>
          {/* -------- appointments -------- */}
          <div className="w-fit flex flex-col gap-[1.875rem] items-center justify-center bg-[#D9D9D9] py-[1.625rem] px-2 rounded-[0.625rem] min-w-[10.625rem]">
            <Image
              src="/icons/appointments-icon.svg"
              alt="appointment"
              width={25}
              height={25}
            />
            <p className="text-xl font-medium">Appointments</p>
            <p className="text-xl font-medium">10</p>
          </div>
          {/* -------- sos -------- */}
          <div className="w-fit flex flex-col gap-[1.875rem] items-center justify-center bg-[#D9D9D9] py-[1.625rem] px-2 rounded-[0.625rem] min-w-[10.625rem]">
            <Image src="/icons/sos-icon.svg" alt="sos" width={25} height={25} />
            <p className="text-xl font-medium">SOS</p>
            <p className="text-xl font-medium">20</p>
          </div>
        </div>
        {/* -------- more/add reports -------- */}
        <div className="relative">
          <p className="absolute text-xl font-medium -top-8 left-14">More</p>
          {/* -------- more card -------- */}
          <div className="w-fit flex flex-col gap-[1.875rem] items-center justify-center bg-[#D9D9D9] py-[1.625rem] px-2 rounded-[0.625rem] min-w-[10.625rem] border-dashed border-black border cursor-pointer">
            {/* <Image
                  src="/icons/more-icon.svg"
                  alt="sos"
                  width={53}
                  height={97}
                  layout="intrinsic"
                /> */}
            <p className="text-[94px]">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
