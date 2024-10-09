import React from 'react';

const OpportunityPredictor = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">School Opportunity Predictor</h2>
      
      <div className="mb-3 flex justify-between">
        <span>Yale</span>
        <span className="text-red-500">30% (Low)</span>
      </div>
      
      <div className="mb-3 flex justify-between">
        <span>Washington University in St. Louis</span>
        <span className="text-yellow-500">55% (Middle)</span>
      </div>
      
      <div className="flex justify-between">
        <span>University of Notre Dame</span>
        <span className="text-green-500">80% (High)</span>
      </div>
    </div>
  );
};

export default OpportunityPredictor;
