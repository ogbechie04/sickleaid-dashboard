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
    // formState: { errors },
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
            className="grid grid-cols-2 gap-y-10 gap-x-20 flex-1"
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- patient full name -------- */}
            <div className="relative flex col-span-2">
              <input
                type="text"
                id="full-name"
                className="w-full rounded-[1.25rem] pl-[6.375rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Full name"
                {...register("fullName")}
              />
              <label
                htmlFor="full-name"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Full name:
              </label>
            </div>
            {/* -------- patient gender -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="gender"
                className="w-full rounded-[1.25rem] pl-[5.25rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="gender"
                {...register("gender")}
              />
              <label
                htmlFor="gender"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Gender:
              </label>
            </div>
            {/* -------- patient contact -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="contact"
                className="w-full rounded-[1.25rem] pl-[5.625rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Contact"
                {...register("contact")}
              />
              <label
                htmlFor="contact"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Contact:
              </label>
            </div>
            {/* -------- patient address -------- */}
            <div className="relative flex col-span-2">
              <input
                type="text"
                id="address"
                className="w-full rounded-[1.25rem] pl-[5.75rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="address"
                {...register("address")}
              />
              <label
                htmlFor="address"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Address:
              </label>
            </div>
            {/* -------- patient state -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="state"
                className="w-full rounded-[1.25rem] pl-[4.25rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="state"
                {...register("state")}
              />
              <label
                htmlFor="state"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                State:
              </label>
            </div>
            {/* -------- patient id -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="pateint-id"
                className="w-full rounded-[1.25rem] pl-[6.375rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Patient ID"
                {...register("id")}
              />
              <label
                htmlFor="patient-id"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Patient ID:
              </label>
            </div>
            {/* -------- patient blood type -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="blood-type"
                className="w-full rounded-[1.25rem] pl-[6.875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Blood type"
                {...register("bloodType")}
              />
              <label
                htmlFor="blood-type"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Blood type:
              </label>
            </div>
            {/* -------- patient age -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="age"
                className="w-full rounded-[1.25rem] pl-[3.625rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Age"
                {...register("age")}
              />
              <label
                htmlFor="age"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Age:
              </label>
            </div>
            {/* -------- patient allergies -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="allergies"
                className="w-full rounded-[1.25rem] pl-[6rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Allergies"
                {...register("allergies")}
              />
              <label
                htmlFor="allergies"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Allergies:
              </label>
            </div>
            {/* -------- patient weight -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="weight"
                className="w-full rounded-[1.25rem] pl-[5.1875rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="weight"
                {...register("weight")}
              />
              <label
                htmlFor="weight"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Weight:
              </label>
            </div>
            {/* -------- patient joined date -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="joined-date"
                className="w-full rounded-[1.25rem] pl-[7.4375rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Joined date"
                {...register("joinedDate")}
              />
              <label
                htmlFor="joined-date"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
              >
                Joined date:
              </label>
            </div>
            {/* -------- patient height -------- */}
            <div className="relative flex">
              <input
                type="text"
                id="height"
                className="w-full rounded-[1.25rem] pl-[4.9375rem] py-[1.5625rem] placeholder-transparent focus:outline-none shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)] text-black font-medium text-normal"
                placeholder="Height"
                {...register("height")}
              />
              <label
                htmlFor="height"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-bold text-normal"
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
          className="self-end text-normal font-bold text-white bg-primaryGreen py-[1.5625rem] px-[4.375rem] rounded-[1.875rem] shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPatient;
