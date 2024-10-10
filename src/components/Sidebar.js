import { Button, Switch } from '@headlessui/react';
import React from 'react';
import { BsLaptopFill, BsFillBoxSeamFill } from "react-icons/bs";
import { FaHome } from 'react-icons/fa';
import { FaCube } from "react-icons/fa6";
import { GoNumber } from "react-icons/go";
import { GiOpenBook } from "react-icons/gi";
import { HiPencil } from "react-icons/hi";
import { MdAnalytics } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="w-18 min-h-screen p-2 flex flex-col items-center space-y-4 bg-gray-100 border-r-2 border-light-purple">
      <div className="flex-1 flex flex-col items-center space-y-5">
        <FaCube size={20} className="text-main-purple my-2" />
        <div className="flex flex-col items-center">
          <Button className="rounded-full bg-light-purple px-2">
            <FaHome size={18} className="text-main-purple" />
          </Button>
          <p className="text-main-purple text-xs">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <GoNumber size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Math</p>
        </div>
        <div className="flex flex-col items-center">
          <GiOpenBook size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Reading</p>
        </div>
        <div className="flex flex-col items-center">
          <HiPencil size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Writing</p>
        </div>
        <div className="flex flex-col items-center">
          <BsLaptopFill size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Test</p>
        </div>
        <div className="flex flex-col items-center">
          <MdAnalytics size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Report</p>
        </div>
        <div className="flex flex-col items-center">
          <PiChalkboardTeacherFill size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Lecture</p>
        </div>
        <div className="flex flex-col items-center">
          <BsFillBoxSeamFill size={18} className="text-gray-400" />
          <p className="text-gray-400 text-xs">Saved</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <RxAvatar size={28} className="text-yellow-600" />
        <Switch
          checked
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-main-purple"
        >
          <span className="size-6 translate-x-1 rounded-full bg-light-purple transition group-data-[checked]:translate-x-6" />
        </Switch>      </div>
    </div>
  );
};

export default Sidebar;
