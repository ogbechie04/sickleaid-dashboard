import React from "react";
import Image from "next/image";

const Onboarding2: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between">
      {/* -------- first half -------- */}
      <div className="flex flex-col flex-[2] w-full flex-2 py-12 px-[2.375rem] justify-between h-full font-Inter">
        {/* -------- logo image -------- */}
        <Image
          src="/logos/onboarding-logo2.svg"
          alt="onboarding"
          width={140}
          height={100}
        />
        <p className="self-center justify-center text-[32px] font-bold">
          Your Health, Our Priority !!
        </p>
        <button className="self-end py-[1.125rem] px-9 bg-primaryGreen rounded-[0.625rem] text-white text-2xl">Next</button>
      </div>
      {/* -------- second half -------- */}
      <div className="h-full w-full flex justify-end flex-1">
        {/* -------- onboarding image -------- */}
        <Image
          src="/images/onboarding2-image.svg"
          alt="onboarding"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Onboarding2;
