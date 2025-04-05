"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Notification = () => {
  const router = useRouter();
  const testNotification = [
    {
      avatar: "/images/joy-martins.svg",
      name: "Joy Martin",
      gender: "F",
      patientId: 2167387549,
      time: "14:00",
      date: "01/06/24",
    },
    {
      avatar: "/images/justin-chibuike.svg",
      name: "Justin Chibuike",
      gender: "M",
      patientId: 1423789560,
      time: "13:05",
      date: "22/05/24",
    },
    {
      avatar: "/images/favour-abayomi.svg",
      name: "Favour Abayomi",
      gender: "F",
      patientId: 3951712480,
      time: "12:00",
      date: "05/04/24",
    },
    {
      avatar: "/images/samuel-eboh.svg",
      name: "Samuel Eboh",
      gender: "M",
      patientId: 24683579,
      time: "11:55",
      date: "17/03/24",
    },
    {
      avatar: "/images/esther-paul.svg",
      name: "Esther Paul",
      gender: "F",
      patientId: 4321987605,
      time: "10:00",
      date: "27/02/24",
    },
    {
      avatar: "/images/miracle-oloye.svg",
      name: "Miracle Oloye",
      gender: "F",
      patientId: 5432106789,
      time: "09:00",
      date: "30/01/24",
    },
  ];

  return (
    <div className="pl-[2.375rem] pr-[0.875rem] pt-[2.75rem] pb-8 flex w-full flex-col gap-[3.625rem]">
      <p className="text-[1.875rem] font-bold">Notification</p>
      {/* -------- notification data -------- */}
      <div>
        <table className="bg-white text-black border-separate border-spacing-y-8 w-full">
          <thead>
            <tr className="text-[32px] font-semibold">
              <th></th>
              <th>Name</th>
              <th>Gender</th>
              <th>Patient Id</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className=" gap-[3.125rem]">
            {testNotification.map((notification, index) => (
              <tr
                key={index}
                className="text-center overflow-hidden text-xl font-semibold border rounded-[35px] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] cursor-pointer"
                onClick={() =>
                  router.push("/[hospital_name]/notification/client-profile")
                }
              >
                {/* <td className="">
                  <Image
                    src={notification.avatar}
                    alt={notification.name}
                    width={112}
                    height={115}
                  />
                </td> */}
                <td className="w-fit whitespace-nowrap">
                  <Image
                    src={notification.avatar}
                    alt={notification.name}
                    width={112}
                    height={115}
                  />
                </td>
                <td className="">{notification.name}</td>
                <td className="">{notification.gender}</td>
                <td className="">{notification.patientId}</td>
                <td className="">{notification.date}</td>
                <td className="">{notification.time}</td>
                {/* <td className="border-y border-r border-black rounded-r-[30px]">
                  {notification.time}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notification;
