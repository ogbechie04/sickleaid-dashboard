import React from "react";
import Image from "next/image";

const Onboarding1: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* -------- onboarding image -------- */}
      <Image
        src="/logos/onboarding-logo1.svg"
        alt="onboarding"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Onboarding1;
