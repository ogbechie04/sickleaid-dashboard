'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Onboarding1: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding/step2");
    }, 3000);
    return () => clearTimeout(timer);
    })

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
