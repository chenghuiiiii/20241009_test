import React from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs";
import { TfiThemifyFaviconAlt } from "react-icons/tfi";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Assistant = () => {
  return (
    <div className="flex flex-col items-center space-y-2 p-6">
      <div className="flex-1 border border-main-purple rounded-lg p-2 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <TfiThemifyFaviconAlt size={16} className="text-main-purple" />
          <h2 className="flex-1 text-md font-bold text-center">PIXIE</h2>
          <BsArrowsAngleExpand size={16} className="text-main-purple" />
        </div>
        <div className="flex flex-col-reverse flex-1 p-2 mb-2 overflow-y-auto">
          <div className="flex items-start">
            <div className="border border-main-purple p-2 rounded-r-lg rounded-tl-lg mb-2 text-sm text-start">Hello! I'm here to help.</div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Ask me anything..."
          className="w-full p-2 border border-gray-300 rounded-full"
        />
      </div>
      <p className="text-gray-600">
        <IoMdHelpCircleOutline size={18} className="inline mx-2 text-gray-500" />
        help
      </p>
    </div>
  );
};

export default Assistant;
