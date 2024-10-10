import React from 'react';

const Assistant = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Assistant</h2>
      
      <div className="h-48 bg-gray-100 p-2 mb-4 rounded-lg overflow-y-auto">
        <div className="bg-gray-300 p-2 rounded-lg mb-2">Hello! I'm here to help.</div>
      </div>

      <input
        type="text"
        placeholder="Ask me anything..."
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default Assistant;
