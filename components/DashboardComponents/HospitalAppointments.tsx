import Image from "next/image";
import React from "react";

const HospitalAppointments = () => {
  const appointements = [
    {
      avatar: "/images/user-favour.svg",
      name: "Favour",
      location: "14, Amuwo odofin",
      date: "4th March",
      time: "14:00",
    },
    {
      avatar: "/images/user-justin.svg",
      name: "Justin",
      location: "6, Prince lane",
      date: "4th March",
      time: "15:00",
    },
  ];
  return (
    <div>
      <table className="bg-white text-black border-separate border-spacing-y-8 w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className=" gap-[3.125rem]">
          {appointements.map((appointement, index) => (
            <tr
              key={index}
              className="border rounded-[15px] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] text-center"
            >
              <td>
                <Image
                  src={appointement.avatar}
                  alt={appointement.name}
                  width={112}
                  height={115}
                  className="rounded-l-[15px]"
                />
              </td>
              <td>{appointement.name}</td>
              <td>{appointement.location}</td>
              <td>{appointement.date}</td>
              <td>{appointement.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalAppointments;
