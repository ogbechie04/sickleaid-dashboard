"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";
import SwitchToggle from "@/components/SwitchToggle";

const NotificationSettings = () => {
  const [isSosAlertEnabled, setIsSosAlertEnabled] = useState(true);
  const [isAppointmentRemindersEnabled, setIsAppointmentRemindersEnabled] =
    useState(true);
  const [isHealthTipsEnabled, setIsHealthTipsEnabled] = useState(true);
  const [isSmsAlertEnabled, setIsSmsAlertEnabled] = useState(true);
  const router = useRouter();

  //   -------- toggle sos alert ---------
  const toggleSosAlert = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSosAlertEnabled(event.target.checked);
  };

  //   -------- toggle appointment reminders ---------
  const toggleAppointmentReminders = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsAppointmentRemindersEnabled(event.target.checked);
  };

  //   -------- toggle health tips ---------
  const toggleHealthTips = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsHealthTipsEnabled(event.target.checked);
  };

  //   -------- toggle sms alert ---------
  const toggleSmsAlert = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSmsAlertEnabled(event.target.checked);
  };

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
        <p className="text-black text-[30px] font-bold">
          Notification Settings
        </p>
      </div>

      {/* -------- toggle buttons -------- */}
      <div className="flex flex-col gap-[3.985rem]">
        {/* -------- sos alert -------- */}
        <SwitchToggle
          checked={isSosAlertEnabled}
          onChange={toggleSosAlert}
          label="SOS Alert"
          id="sos-alert"
        />
        {/* -------- appointment reminders -------- */}
        <SwitchToggle
          checked={isAppointmentRemindersEnabled}
          onChange={toggleAppointmentReminders}
          label="Appointment Reminders"
          id="appointment-reminders"
        />
        {/* -------- health tips -------- */}
        <SwitchToggle
          checked={isHealthTipsEnabled}
          onChange={toggleHealthTips}
          label="Health Tips"
          id="health-tips"
        />
        {/* -------- sms alert -------- */}
        <SwitchToggle
          checked={isSmsAlertEnabled}
          onChange={toggleSmsAlert}
          label="SMS Alert"
          id="sms-alert"
        />
      </div>
    </div>
  );
};

export default NotificationSettings;
