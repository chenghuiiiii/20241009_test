import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { score: 400, testTakers: 2000 },
  { score: 800, testTakers: 8000 },
  { score: 1200, testTakers: 12000 },
  { score: 1600, testTakers: 4000 }
];

const ScoreDistribution = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">SAT Score Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="score" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#e0e0e0" />
          <Line type="monotone" dataKey="testTakers" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreDistribution;
