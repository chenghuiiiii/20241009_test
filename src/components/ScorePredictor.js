import React from 'react';
import { IoAlertCircleOutline } from "react-icons/io5";

const ScorePredictor = () => {
  return (
    <div className="flex justify-between items-center bg-main-purple p-4 rounded-lg mb-6">
      <div className="text-start">
        <h1 className="text-3xl font-bold text-light-purple/[.7]">
          AI Predicted Score
          <IoAlertCircleOutline size={20} className="inline text-light-purple/[.7] m-2" />
        </h1>
        <h1 className="text-3xl text-light-purple/[.7]">
          SAT → ACT:
          <span className="border border-white-600 rounded-full text-xl text-white font-bold px-2 mx-2">29</span>
        </h1>
      </div>
      <h1 className="text-5xl font-extrabold text-light-purple Predict-score">
        1600
      </h1>
    </div>
  );
};

export default ScorePredictor;
