import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "May", price: 2000 },
  { name: "Jun", price: 2300 },
  { name: "Jul", price: 1700 },
  { name: "Aug", price: 1100 },
  { name: "Sep", price: 1300 },
  { name: "Oct", price: 2100 },
];

const yAxisTicks = [3000, 2000, 1000, 0];
const formatYAxisTick = (value) => `${value / 1000}k birr`;

export default function Analytics() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={yAxisTicks} tickFormatter={formatYAxisTick} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
