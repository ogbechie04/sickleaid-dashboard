import React from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const Record = () => {
  const testPatientList = [
    {
      avatar: "/images/esther-paul.svg",
      name: "Esther Paul",
      age: 23,
      joinedDate: "29/02/24",
      address: "14 Amuwo odofin",
    },
    {
      avatar: "/images/favour-abayomi.svg",
      name: "Favour Abayomi",
      age: 18,
      joinedDate: "14/08/24",
      address: "9, Prince lane",
    },
    {
      avatar: "/images/justin-chibuike.svg",
      name: "Justin Chibuike",
      age: 18,
      joinedDate: "01/07/24",
      address: "232, Divine Estate",
    },
    {
      avatar: "/images/miracle-oloye.svg",
      name: "Miracle Oloye",
      age: 4,
      joinedDate: "30/06/24",
      address: "28, Liberty Road",
    },
    {
      avatar: "/images/samuel-eboh.svg",
      name: "Samuel Eboh",
      age: 34,
      joinedDate: "22/05/24",
      address: "75, Osho-drive Street",
    },
  ];

  return (
    <div className="pl-[2.375rem] pr-10 pt-[2.75rem] pb-8 flex w-full flex-col gap-[3.625rem]">
      {/* -------- search bar -------- */}
      <div className="w-full relative flex items-center">
        <input
          type={"text"}
          id="hospital-password"
          placeholder="Search for patients name"
          className={`border border-solid rounded-md w-full py-2.5 pl-14 pr-12 focus:outline-none autofill:bg-none border-[#D9D9D9] text-black`}
          //   {...register("hospitalPassword")}
        />
        <button
          type="button"
          className="absolute left-[1.3125rem] w-[20px] h-[20px]"
          //   onClick={handleShowPassword}
        >
          <FiSearch className="w-[20px] h-[20px]" width={30} height={30} />
        </button>
      </div>
      {/* -------- patients list -------- */}
      <div>
        <p className="text-[1.875rem] font-bold">Patient List</p>
        {/* -------- patient list data -------- */}
        <div>
          <table className="bg-white text-black border-separate border-spacing-y-8 w-full">
            <thead>
              <tr className="text-[32px] font-semibold">
                <th></th>
                <th>Name</th>
                <th>Age</th>
                <th>Joined date</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody className=" gap-[3.125rem]">
              {testPatientList.map((notification, index) => (
                <tr
                  key={index}
                  className="text-center overflow-hidden text-xl font-semibold border rounded-[35px] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] cursor-pointer"
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
                  <td className="">{notification.age}</td>
                  <td className="">{notification.joinedDate}</td>
                  <td className="">{notification.address}</td>
                  {/* <td className="border-y border-r border-black rounded-r-[30px]">
                              {notification.time}
                            </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Record;
