import { Button } from '@headlessui/react';
import React from 'react';
import { FaSchoolFlag } from "react-icons/fa6";
import { MdBadge } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PieChart, Pie, Cell, Label, Text } from 'recharts';

const OpportunityPredictor = () => {
  const data_ya = [
    { name: 'fill', value: 70, color: '#D1D5DB' },
    { name: 'empty', value: 30, color: '#785FBB' },
  ];
  const data_wa = [
    { name: 'fill', value: 45, color: '#D1D5DB' },
    { name: 'empty', value: 55, color: '#785FBB' },
  ];
  const data_no = [
    { name: 'fill', value: 20, color: '#D1D5DB' },
    { name: 'empty', value: 80, color: '#785FBB' },
  ];
  return (
    <div className="bg-gray-100 p-4 rounded-lg border-2 border-light-purple mb-6">
      <h2 className="relative text-xl font-bold mb-4 text-start">
        <FaSchoolFlag size={28} className="inline text-main-purple mr-2" />
        School Opportunity Predictor
        <Button className="absolute right-4 top-2 flex items-center justify-between h-full w-24 text-main-purple rounded-lg border shadow-md text-xs px-2">
          <HiAdjustmentsHorizontal size={18} className="text-main-purple" />
          30%-80%
        </Button>
        </h2>
      <div className="mb-3 flex justify-between">
        <p className="flex items-center">
          <MdBadge size={20} className="inline text-main-purple mr-2" />
          Yale
        </p>
        <div className="flex items-center">
          <PieChart width={45} height={45}>
            <Pie
              data={data_ya}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="85%"
              fill="#8884d8"
              paddingAngle={5}
              startAngle={-270}
              dataKey="value"
              isAnimationActive={false}
            >
              {data_ya.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                content={(p) => {
                  const { viewBox: { cx, cy } } = p;
                  const positioningProps = {
                    x: cx,
                    y: cy,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle',
                  };
                  return (
                    <>
                      <Text {...positioningProps} fill="#785FBB" fontSize={10} fontWeight={600}>{`${data_ya[1].value}%`}</Text>
                    </>
                  );
                }}
              />
            </Pie>
          </PieChart>
          <Button className="w-16 rounded-sm bg-red-200 text-sm text-white px-2">LOW</Button>
          <IoIosArrowForward size={20} className="text-gray-300" />
        </div>
      </div>
      <div className="mb-3 flex justify-between">
        <p className="flex items-center">
          <MdBadge size={20} className="inline text-main-purple mr-2" />
          Washington University in St. Louis
        </p>
        <div className="flex items-center">
          <PieChart width={45} height={45}>
            <Pie
              data={data_wa}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="85%"
              fill="#8884d8"
              paddingAngle={5}
              startAngle={-270}
              dataKey="value"
              isAnimationActive={false}
            >
              {data_wa.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                content={(p) => {
                  const { viewBox: { cx, cy } } = p;
                  const positioningProps = {
                    x: cx,
                    y: cy,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle',
                  };
                  return (
                    <>
                      <Text {...positioningProps} fill="#785FBB" fontSize={10} fontWeight={600}>{`${data_wa[1].value}%`}</Text>
                    </>
                  );
                }}
              />
            </Pie>
          </PieChart>
          <Button className="w-16 rounded-sm bg-orange-200 text-sm text-white px-2">MIDDLE</Button>
          <IoIosArrowForward size={20} className="text-gray-300" />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center">
          <MdBadge size={20} className="inline text-main-purple mr-2" />
          University of Notre Dame
        </p>
        <div className="flex items-center">
          <PieChart width={45} height={45}>
            <Pie
              data={data_no}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="85%"
              fill="#8884d8"
              paddingAngle={5}
              startAngle={-270}
              dataKey="value"
              isAnimationActive={false}
            >
              {data_no.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                content={(p) => {
                  const { viewBox: { cx, cy } } = p;
                  const positioningProps = {
                    x: cx,
                    y: cy,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle',
                  };
                  return (
                    <>
                      <Text {...positioningProps} fill="#785FBB" fontSize={10} fontWeight={600}>{`${data_no[1].value}%`}</Text>
                    </>
                  );
                }}
              />
            </Pie>
          </PieChart>
          <Button className="w-16 rounded-sm bg-green-400 text-sm text-white px-2">HIGH</Button>
          <IoIosArrowForward size={20} className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default OpportunityPredictor;
