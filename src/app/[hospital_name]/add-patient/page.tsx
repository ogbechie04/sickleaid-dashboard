"use client";

import ImageUpload from "@/components/DashboardComponents/ImageUpload";
import React from "react";
import { FiAlertCircle, FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { patientFormData, patientSchema } from "@/features/auth/patientSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DropdownComponent from "@/components/DropdownComponent";
import CalendarComponent from "@/components/CalendarComponent";
import nigeriaStates from "@/constants/nigeriaStates";
import bloodType from "@/constants/bloodType";
import gender from "@/constants/gender";

const AddPatient = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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
            className="grid grid-cols-2 gap-y-7 gap-x-20 flex-1"
            onSubmit={handleSubmit(submitData)}
          >
            {/* -------- patient-full-name -------- */}
            <div className="flex flex-col gap-2 col-span-2">
              <label
                htmlFor="patient-full-name"
                className="text-[#332EOE] font-bold text-base"
              >
                Full Name
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-full-name"
                  placeholder="Enter patient's full name"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.fullName
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("fullName")}
                />
              </div>
              {errors.fullName && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.fullName.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-gender -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-gender"
                className="text-[#332EOE] font-bold text-base"
              >
                Gender
              </label>
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <DropdownComponent
                    placeholder="Select patients gender"
                    optionItems={gender}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.gender?.message}
                  />
                )}
              />
              {errors.gender && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.gender.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-contact -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-contact"
                className="text-[#332EOE] font-bold text-base"
              >
                Contact
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-contact"
                  placeholder="Enter patient's contact"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.contact
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("contact")}
                />
              </div>
              {errors.contact && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.contact.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-address -------- */}
            <div className="flex flex-col gap-2 col-span-2">
              <label
                htmlFor="patient-address"
                className="text-[#332EOE] font-bold text-base"
              >
                Address
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-address"
                  placeholder="Enter patient's address"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.address
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("address")}
                />
              </div>
              {errors.address && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.address.message}
                  </p>
                </div>
              )}
            </div>

            {/* -------- patient-state -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-state"
                className="text-[#332EOE] font-bold text-base"
              >
                State
              </label>
              <Controller
                control={control}
                name="state"
                render={({ field }) => (
                  <DropdownComponent
                    placeholder="Select patients state"
                    optionItems={nigeriaStates}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.state?.message}
                  />
                )}
              />
              {errors.state && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.state.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-id -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-id"
                className="text-[#332EOE] font-bold text-base"
              >
                Patient ID
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-id"
                  placeholder="Enter patient id"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.id
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("id")}
                />
              </div>
              {errors.id && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">{errors.id.message}</p>
                </div>
              )}
            </div>
            {/* -------- patient-blood-type -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-blood-type"
                className="text-[#332EOE] font-bold text-base"
              >
                Blood Type
              </label>
              <Controller
                control={control}
                name="bloodType"
                render={({ field }) => (
                  <DropdownComponent
                    placeholder="Select patients blood type"
                    optionItems={bloodType}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.bloodType?.message}
                  />
                )}
              />
              {errors.bloodType && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.bloodType.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-age -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-age"
                className="text-[#332EOE] font-bold text-base"
              >
                Age
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-age"
                  placeholder="Enter patient age"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.age
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("age")}
                />
              </div>
              {errors.age && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">{errors.age.message}</p>
                </div>
              )}
            </div>
            {/* -------- patient-allergies -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-allergies"
                className="text-[#332EOE] font-bold text-base"
              >
                Allergies
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-allergies"
                  placeholder="Enter patient allergies"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.allergies
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("allergies")}
                />
              </div>
              {errors.allergies && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.allergies.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-weight -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-weight"
                className="text-[#332EOE] font-bold text-base"
              >
                Weight(kg)
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-weight"
                  placeholder="Enter patient weight"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.weight
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("weight")}
                />
              </div>
              {errors.weight && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.weight.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-joined-date -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-joined-date"
                className="text-[#332EOE] font-bold text-base"
              >
                Joined Date
              </label>
              <Controller
                control={control}
                name="joinedDate"
                render={({ field }) => (
                  <CalendarComponent
                    variant={"form"}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors?.joinedDate?.message}
                    name={field.name}
                  />
                )}
              />
              {errors.joinedDate && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.joinedDate.message}
                  </p>
                </div>
              )}
            </div>
            {/* -------- patient-height -------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="patient-height"
                className="text-[#332EOE] font-bold text-base"
              >
                Height(ft in)
              </label>
              <div className="w-full relative flex items-center">
                <input
                  type={"text"}
                  id="patient-height"
                  placeholder="Enter patient height"
                  className={`border border-solid rounded-md w-full py-2.5 pl-5 pr-12 focus:outline-none autofill:bg-none ${
                    errors.height
                      ? "border-[var(--danger)] text-[var(--danger)]"
                      : "border-[#D9D9D9] text-black"
                  }`}
                  {...register("height")}
                />
              </div>
              {errors.height && (
                <div className="flex gap-[7px] text-[var(--danger)] items-center">
                  <FiAlertCircle size={"18px"} />
                  <p className="text-sm leading-normal">
                    {errors.height.message}
                  </p>
                </div>
              )}
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

{
  /* -------- patient full name --------
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
-------- patient gender --------
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
-------- patient contact --------
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
-------- patient address --------
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
-------- patient state --------
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
-------- patient id --------
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
-------- patient blood type --------
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
-------- patient age --------
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
-------- patient allergies --------
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
-------- patient weight --------
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
-------- patient joined date --------
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
-------- patient height --------
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
</div> */
}
