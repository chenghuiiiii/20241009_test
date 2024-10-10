import React from 'react';
import { FaHome, FaBook, FaPen, FaChartLine, FaClipboard } from 'react-icons/fa';
import { FaCube } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-20 min-h-screen p-4 flex flex-col items-center space-y-6 shadow-md bg-gray-100 border border-r-main-purple/[.5]">
      <FaCube size={24} className="text-main-purple my-2" />
      <div className="flex flex-col items-center">
        <FaHome size={24} className="text-main-purple" />
        <p className="text-main-purple text-xs">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <FaBook size={24} className="text-gray-400" />
        <p className="text-gray-400 text-xs">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <FaPen size={24} className="text-gray-400" />
        <p className="text-gray-400 text-xs">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <FaChartLine size={24} className="text-gray-400" />
        <p className="text-gray-400 text-xs">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <FaClipboard size={24} className="text-gray-400" />
        <p className="text-gray-400 text-xs">Home</p>
      </div>
    </div>
  );
};

export default Sidebar;
