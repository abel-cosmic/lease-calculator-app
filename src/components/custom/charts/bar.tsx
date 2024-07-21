// components/custom/chart/BarChartComponent.jsx
"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";

const BarChartComponent = ({ data, config }) => {
  const { desktop, mobile } = config;

  return (
    <Card className="max-md:w-[90%]">
      <CardContent className="p-4">
        <ChartContainer config={config} className="h-full w-full">
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
      </CardContent>
    </Card>
  );
};

export default BarChartComponent;
