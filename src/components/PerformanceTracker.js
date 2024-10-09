import React from 'react';

const PerformanceTracker = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Performance Tracker</h2>
      
      <div className="mb-3">
        <div className="flex justify-between">
          <span>Math</span>
          <span>680/800</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between">
          <span>Reading</span>
          <span>320/400</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <span>Writing</span>
          <span>350/400</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '87%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracker;
