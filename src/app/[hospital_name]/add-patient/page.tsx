"use client";

import ImageUpload from "@components/DashboardComponents/ImageUpload";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AddPatient = () => {
  const router = useRouter();

  return (
    <div className="pl-[5.4375rem] pr-[5.625rem] pt-[3.75rem] pb-[6.125rem] flex w-full flex-col gap-[2.875rem]">
      {/* -------- heading and back button -------- */}
      <div className="flex items-center gap-10">
        <button className="flex items-center justify-center" onClick={() => router.push("/[hospital_name]")}>
          <FiChevronLeft size={32} className="" />
        </button>
        <p className="text-black text-[30px] font-bold">Add Patient</p>
      </div>
      {/* -------- form and photo -------- */}
      <div className="flex gap-10">
        {/* --------- patient details form -------- */}
        <form action="" className="grid grid-cols-2 gap-y-10 gap-x-20">
          {/* -------- patient full name -------- */}
          <div className="relative flex col-span-2">
            <input
              type="text"
              id="full-name"
              className="w-full rounded-[1.25rem] pl-[8.8125rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Full name"
            />
            <label
              htmlFor="full-name"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Full name:
            </label>
          </div>
          {/* -------- patient gender -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="gender"
              className="w-full rounded-[1.25rem] pl-[7.25rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="gender"
            />
            <label
              htmlFor="gender"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Gender:
            </label>
          </div>
          {/* -------- patient contact -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="contact"
              className="w-full rounded-[1.25rem] pl-[7.75rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Contact"
            />
            <label
              htmlFor="contact"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Contact:
            </label>
          </div>
           {/* -------- patient address -------- */}
           <div className="relative flex col-span-2">
            <input
              type="text"
              id="address"
              className="w-full rounded-[1.25rem] pl-[8rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="address"
            />
            <label
              htmlFor="address"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Address:
            </label>
          </div>
          {/* -------- patient state -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="state"
              className="w-full rounded-[1.25rem] pl-[5.75rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="state"
            />
            <label
              htmlFor="state"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              State:
            </label>
          </div>{/* -------- patient id -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="pateint-id"
              className="w-full rounded-[1.25rem] pl-[8.875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Patient ID"
            />
            <label
              htmlFor="patient-id"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Patient ID:
            </label>
          </div>{/* -------- patient blood type -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="blood-type"
              className="w-full rounded-[1.25rem] pl-[9.6875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Blood type"
            />
            <label
              htmlFor="blood-type"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Blood type:
            </label>
          </div>{/* -------- patient age -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="age"
              className="w-full rounded-[1.25rem] pl-[4.75rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Age"
            />
            <label
              htmlFor="age"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Age:
            </label>
          </div>{/* -------- patient allergies -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="allergies"
              className="w-full rounded-[1.25rem] pl-[8.3125rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Allergies"
            />
            <label
              htmlFor="allergies"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Allergies:
            </label>
          </div>{/* -------- patient weight -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="weight"
              className="w-full rounded-[1.25rem] pl-[7.0625rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="weight"
            />
            <label
              htmlFor="weight"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Weight:
            </label>
          </div>{/* -------- patient joined date -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="joined-date"
              className="w-full rounded-[1.25rem] pl-[10.735rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Joined date"
            />
            <label
              htmlFor="joined-date"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Joined date:
            </label>
          </div>{/* -------- patient height -------- */}
          <div className="relative flex">
            <input
              type="text"
              id="height"
              className="w-full rounded-[1.25rem] pl-[6.6875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
              placeholder="Height"
            />
            <label
              htmlFor="height"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
            >
              Height:
            </label>
          </div>
        </form>
        {/* -------- patient photo -------- */}
        <div>
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
