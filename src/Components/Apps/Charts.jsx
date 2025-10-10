import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Charts = ({ details }) => {
  const chartData = details.ratings;

  const data = chartData.map((d) => ({
    name: d.name,
    count: d.count,
  }));

  return (
    <div style={{ width: "100%", height: 300 }} className="my-10">
      <h4 className="font-bold text-2xl mb-5 text-gray-700">Ratings</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[...data].reverse()} layout="vertical" barCategoryGap={10}>
          <XAxis type="number" />
          <YAxis className="" dataKey="name" type="category" />
          <Bar dataKey="count" fill="#ff8811" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center gap-1 mt-3">
        <p className="w-3.5 h-3.5 bg-[#ff8811]"></p> <span>Count</span>
      </div>
    </div>
  );
};

export default Charts;
