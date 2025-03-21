"use client";

import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
// import { FaCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";

const LanguagePreferences = () => {
  const [language, setLanguage] = useState("English");
  const languages = ["English", "Pidgin"];

//   const languageEnglish = () => {
//     setLanguage("English");
//   };

//   const languagePidgin = () => {
//     setLanguage("Pidgin");
//   };

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
        <p className="text-black text-[30px] font-bold">Language Preferences</p>
      </div>

      {/* -------- preferred languages --------- */}
      <div className="flex flex-col gap-5">
        <p className="text-black font-bold text-xl">
          Choose preferred language
        </p>
        {/* --------- language choices -------- */}
        <div className="flex flex-col gap-3">
          {languages.map((lang) => (
            <button
              key={lang}
              className="flex items-center gap-4 focus:outline-none"
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
            >
              <p>{lang}</p>
              <FaCheck
                className={`${language === lang ? "block" : "hidden"}`}
              />
            </button>
          ))}
          {/* -------- english --------
          <button className="flex items-center gap-4" onClick={languageEnglish}>
            <p>English</p>
            <FaCheck className={`${language === 'English' ? 'block' : 'hidden'}`} />
          </button>
          -------- pidgin --------
          <button className="flex items-center gap-4" onClick={languagePidgin}>
            <p>Pidgin</p>
            <FaCheck className={`${language === 'Pidgin' ? 'block' : 'hidden'}`} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LanguagePreferences;
