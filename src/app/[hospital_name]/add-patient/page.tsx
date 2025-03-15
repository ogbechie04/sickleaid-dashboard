"use client";

import ImageUpload from "@components/DashboardComponents/ImageUpload";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { patientFormData, patientSchema } from "@features/auth/patientSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddPatient = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<patientFormData>({
    resolver: zodResolver(patientSchema),
    mode: "onSubmit",
  });

  const submitData = (data: patientFormData) => {
    console.log("submitted data:", data);
    router.push("/[hospital_name]");
  };

  return (
    <div className="pl-[5.4375rem] pr-[5.625rem] pt-[3.75rem] pb-[6.125rem] flex w-full flex-col gap-[2.875rem]">
      {/* -------- heading and back button -------- */}
      <div className="flex items-center gap-10">
        <button
          className="flex items-center justify-center"
          onClick={() => router.push("/[hospital_name]")}
        >
          <FiChevronLeft size={32} className="" />
        </button>
        <p className="text-black text-[30px] font-bold">Add Patient</p>
      </div>
      {/* -------- form and save button -------- */}
      <div className="flex flex-col">
        {/* -------- form and photo -------- */}
        <div className="flex gap-10">
          {/* --------- patient details form -------- */}
          <form
            action=""
            id="add-patient"
            className="grid grid-cols-2 gap-y-10 gap-x-20"
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- patient full name -------- */}
            <div className="relative flex col-span-2">
              <input
                type="text"
                id="full-name"
                className="w-full rounded-[1.25rem] pl-[8.8125rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Full name"
                {...register("fullName")}
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
                {...register("gender")}
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
                {...register("contact")}
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
                {...register("address")}
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
                {...register("state")}
              />
              <label
                htmlFor="state"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                State:
              </label>
            </div>
            {/* -------- patient id -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="pateint-id"
                className="w-full rounded-[1.25rem] pl-[8.875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Patient ID"
                {...register("id")}
              />
              <label
                htmlFor="patient-id"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                Patient ID:
              </label>
            </div>
            {/* -------- patient blood type -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="blood-type"
                className="w-full rounded-[1.25rem] pl-[9.6875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Blood type"
                {...register("bloodType")}
              />
              <label
                htmlFor="blood-type"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                Blood type:
              </label>
            </div>
            {/* -------- patient age -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="age"
                className="w-full rounded-[1.25rem] pl-[4.75rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Age"
                {...register("age")}
              />
              <label
                htmlFor="age"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                Age:
              </label>
            </div>
            {/* -------- patient allergies -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="allergies"
                className="w-full rounded-[1.25rem] pl-[8.3125rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Allergies"
                {...register("allergies")}
              />
              <label
                htmlFor="allergies"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                Allergies:
              </label>
            </div>
            {/* -------- patient weight -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="weight"
                className="w-full rounded-[1.25rem] pl-[7.0625rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="weight"
                {...register("weight")}
              />
              <label
                htmlFor="weight"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                Weight:
              </label>
            </div>
            {/* -------- patient joined date -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="joined-date"
                className="w-full rounded-[1.25rem] pl-[10.735rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Joined date"
                {...register("joinedDate")}
              />
              <label
                htmlFor="joined-date"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-2xl"
              >
                Joined date:
              </label>
            </div>
            {/* -------- patient height -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="height"
                className="w-full rounded-[1.25rem] pl-[6.6875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-2xl"
                placeholder="Height"
                {...register("height")}
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
        {/* -------- save form button -------- */}
        <button
          form="add-patient"
          className="self-end text-2xl font-bold text-white bg-primaryGreen py-[1.5625rem] px-[4.375rem] rounded-[1.875rem] shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPatient;
