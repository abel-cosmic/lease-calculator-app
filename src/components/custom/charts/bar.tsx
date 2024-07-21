// components/custom/chart/BarChartComponent.jsx
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {  ChartContainer, ChartLegendContent, ChartTooltipContent } from "@/components/ui/chart";

const BarChartComponent = ({ data, config }) => {
  const { desktop, mobile } = config;

  return (
    <ChartContainer config={config} className="min-h-[200px] w-full">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis hide />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill={desktop.color} radius={4} />
        <Bar dataKey="mobile" fill={mobile.color} radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartComponent;
