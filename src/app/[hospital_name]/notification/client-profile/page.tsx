import Image from "next/image";
import React from "react";

const ClientProfile = () => {
  return (
    <div className="pl-[2.375rem] pr-10 pt-[2.75rem] pb-8 flex w-full flex-col gap-[3.625rem]">
      <p className="text-[1.875rem] font-bold">CLIENT PROFILE</p>
      {/* -------- main content -------- */}
      {/* -------- upper half --------- */}
      <div className="flex w-full items-center justify-between gap-[2.875rem]">
        <div className="w-full flex items-center pr-6 gap-4 rounded-[20px] shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.25);]">
          <Image
            src={"/images/miracle-oloye.svg"}
            width={200}
            height={200}
            alt=""
            className="rounded-l-[20px] "
          />
          <div className="flex flex-col gap-4">
            <p className="text-[#999985] font-bold text-2xl">Patient Data</p>
            <div className="flex flex-col gap-4">
              <p>
                <span className="font-bold text-lg">Name:</span>{" "}
                <span className="text-lg">Miracle Oloye</span>
              </p>
              <p>
                <span className="font-bold text-lg">Contact:</span>{" "}
                <span className="text-lg">0806 567 8900</span>
              </p>
              <p>
                <span className="font-bold text-lg">Age:</span>{" "}
                <span className="text-lg">4yrs</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col pt-6 pb-3 px-6 items-start justify-between gap-4 rounded-[20px] shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.25);]">
          <p className="text-[#999985] font-bold text-2xl">Emergency Contact</p>
          <div className="flex flex-col gap-4">
            <p>
              <span className="font-bold text-lg">Name:</span>{" "}
              <span className="text-lg">FirstName LastName</span>
            </p>
            <p>
              <span className="font-bold text-lg">Contact:</span>{" "}
              <span className="text-lg">0806 567 8900</span>
            </p>
            <p>
              <span className="font-bold text-lg">Relationship:</span>{" "}
              <span className="text-lg">Father</span>
            </p>
          </div>
        </div>
      </div>
      {/* -------- lower half --------- */}
      <div className="flex items-center justify-between w-full gap-5 h-[27.6875rem]">
        {/* -------- patient details -------- */}
        <div className="flex flex-col gap-[30px] p-4 border rounded-[20px] border-[#332E0E] w-full h-full">
          {/* --------- gender -------- */}
          <p>
            <span className="font-bold text-lg">Gender:</span>{" "}
            <span className="text-lg">Female</span>
          </p>
          {/* --------- blood type -------- */}
          <p>
            <span className="font-bold text-lg">Blood Type:</span>{" "}
            <span className="text-lg">O+</span>
          </p>
          {/* --------- allergies -------- */}
          <p>
            <span className="font-bold text-lg">Allergies:</span>{" "}
            <span className="text-lg">Milk</span>
          </p>
          {/* --------- weight -------- */}
          <p>
            <span className="font-bold text-lg">Weight:</span>{" "}
            <span className="text-lg">30Kg</span>
          </p>
          {/* --------- height -------- */}
          <p>
            <span className="font-bold text-lg">Height:</span>{" "}
            <span className="text-lg">95.3cm</span>
          </p>
          {/* --------- patient id -------- */}
          <p>
            <span className="font-bold text-lg">Patient ID:</span>{" "}
            <span className="text-lg">213465894216</span>
          </p>
          {/* --------- last visit -------- */}
          <p>
            <span className="font-bold text-lg">Last visit:</span>{" "}
            <span className="text-lg">15th May 2024</span>
          </p>
        </div>
        {/* -------- patient location map -------- */}
        <div className="w-full h-full">
          <Image
            src={"/images/map.svg"}
            width={500}
            height={500}
            alt=""
            className="rounded-[20px] w-full h-full object-contain"
          />
        </div>
      </div>
      {/* -------- buttons -------- */}
      <div className="flex items-center w-full gap-5">
        {/* --------- hmo -------- */}
        <button className="flex items-center justify-center rounded-lg text-white bg-[#332E0E] p-3 text-center font-semibold text-lg w-[18.5rem]">HMO</button>
        {/* --------- share -------- */}
        <button className="flex items-center justify-center rounded-lg text-white bg-[#0B9444] p-3 text-center font-semibold text-lg w-[18.5rem]">Share</button>
      </div>
    </div>
  );
};

export default ClientProfile;