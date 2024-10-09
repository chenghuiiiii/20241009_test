import React from 'react';
import { FaHome, FaBook, FaPen, FaChartLine, FaClipboard } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white w-20 min-h-screen p-4 flex flex-col items-center space-y-6 shadow-md">
      <FaHome size={24} className="text-purple-600" />
      <FaBook size={24} className="text-gray-400" />
      <FaPen size={24} className="text-gray-400" />
      <FaChartLine size={24} className="text-gray-400" />
      <FaClipboard size={24} className="text-gray-400" />
    </div>
  );
};

export default Sidebar;
