import React from "react";

const Contact = () => {
  return (
    <div className="pl-[2.375rem] pr-[0.875rem] pt-[2.75rem] pb-8 flex w-full flex-col gap-8">
      <p className="text-[1.875rem] font-bold">Contact</p>
      <div className="flex flex-col gap-4">
        <p>
          You can reach out to <span className="text-primaryGreen">SickleAid </span>team
        </p>
        {/* -------- phone number -------- */}
        <a href="tel:+08000100010" className="font-medium">08000100010</a>
        {/* -------- email -------- */}
        <a href="mailto:sickleaidhub58@gmail.com" className="font-medium">sickleaidhub58@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
