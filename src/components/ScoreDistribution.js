import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PiTarget } from "react-icons/pi";

const data = [
  { score: 400, testTakers: 2000 },
  { score: 800, testTakers: 8000 },
  { score: 1200, testTakers: 12000 },
  { score: 1600, testTakers: 4000 }
];

const ScoreDistribution = () => {
  const CustomizedTooltip = () => {
    return (
      <p className="text-gray-400">You</p>
    )
  }
  return (
    <div className="bg-gray-100 p-4 rounded-lg border-2 border-light-purple mb-6">
      <h2 className="text-xl font-bold mb-1 text-start">
        <PiTarget size={28} className="inline text-main-purple mr-2" />
        SAT Score Distribution
      </h2>
      <h3 className="text-l font-bold mb-4 pl-9 text-start">
        Higher than
        <span className="text-main-purple mx-1">94%</span>
        of students
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="score" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ strokeDasharray: '3' }} active content={<CustomizedTooltip />} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Line type="monotone" dataKey="testTakers" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreDistribution;
