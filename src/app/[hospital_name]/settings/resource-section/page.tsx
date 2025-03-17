"use client";

import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ResourceSection = () => {
  const router = useRouter();

  return (
    <div className="pl-10 pr-[5.4375rem] pt-[1.9375rem] pb-[4.125rem] flex w-full flex-col gap-[2.125rem]">
      {/* -------- heading and back button -------- */}
      <div className="flex items-center gap-[1.625rem]">
        <button
          className="flex items-center justify-center"
          onClick={() => router.push("/[hospital_name]/settings")}
        >
          <FiChevronLeft size={32} className="" />
        </button>
        <p className="text-black text-[30px] font-bold">Resource Section</p>
      </div>

      {/* -------- resource section content -------- */}
      <div className="flex flex-col gap-5">
        <p className="text-black font-bold text-xl">
          Link to manage sickle cell disease
        </p>
        <p className="text-black font-normal text-lg">
          <a
            href="https://www.cdc.gov/ncbddd/sicklecell/index.html"
            target="_blank"
            rel="noreferrer"
          >
            https:fightsicklecelldiseases.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResourceSection;
