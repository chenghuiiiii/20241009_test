import React from 'react';
import { FaChartSimple } from "react-icons/fa6";

const PerformanceTracker = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg border-2 border-light-purple mb-6">
      <h2 className="text-xl font-bold mb-2 text-start">
        <FaChartSimple size={28} className="inline text-main-purple mr-2" />
        Performance Tracker
      </h2>
      <div className="px-1 py-6">
        <div className="relative mb-8 pb-8 flex items-center space-x-2">
          <span className="w-14 text-end">Math</span>
          <div className="relative flex-1 w-full bg-gray-200 rounded-md h-5">
            <span className="absolute -bottom-5 left-0 text-xs text-gray-400">200</span>
            <div className="bg-purple-600 h-5 rounded-l-md" style={{ width: '85%' }}></div>
            <span className="absolute -bottom-5 right-0 text-xs text-gray-400">800</span>
          </div>
          <span>680</span>
          <hr className="absolute w-[calc(100%-5rem)] bottom-0 left-14 border-t border-dashed border-gray-400" />
        </div>
        <div className="relative mb-8 pb-8 flex items-center space-x-2">
          <span className="w-14 text-end">Reading</span>
          <div className="relative flex-1 w-full bg-gray-200 rounded-md h-5">
            <span className="absolute -bottom-5 left-0 text-xs text-gray-400">100</span>
            <div className="bg-purple-600 h-5 rounded-l-md" style={{ width: '80%' }}></div>
            <span className="absolute -bottom-5 right-0 text-xs text-gray-400">400</span>
          </div>
          <span>320</span>
          <hr className="absolute w-[calc(100%-5rem)] bottom-0 left-14 border-t border-dashed border-gray-400" />
        </div>
        <div className="relative pb-8 flex items-center space-x-2">
          <span className="w-14 text-end">Writing</span>
          <div className="relative flex-1 w-full bg-gray-200 rounded-md h-5">
            <span className="absolute -bottom-5 left-0 text-xs text-gray-400">100</span>
            <div className="bg-purple-600 h-5 rounded-l-md" style={{ width: '87.5%' }}></div>
            <span className="absolute -bottom-5 right-0 text-xs text-gray-400">400</span>
          </div>
          <span>350</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracker;
