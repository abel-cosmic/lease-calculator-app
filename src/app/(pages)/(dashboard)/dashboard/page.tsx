// pages/dashboard/index.jsx
"use client";

import { ShoppingCart, Package, Users, Calendar } from "lucide-react";
import OverviewCard from "@/components/custom/card/overview";
import SlateTable from "@/components/custom/table/slate";
import { Badge } from "@/components/ui/badge";
import BarChartComponent from "@/components/custom/charts/bar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Page() {
  const data = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const config = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  const cardData = [
    {
      title: "Total Leases",
      value: "50",
      description: "Total number of active leases",
      icon: Calendar,
    },
    {
      title: "Total Revenue",
      value: "$15,000",
      description: "Total revenue from leases",
      icon: Calendar,
    },
    {
      title: "Active Leases",
      value: "30",
      description: "Number of currently active leases",
      icon: Calendar,
    },
    {
      title: "Short-term Leases",
      value: "25",
      description: "Number of short-term leases",
      icon: Calendar,
    },
  ];

  const headers = [
    { label: "Customer", key: "customer", hidden: false },
    { label: "Type", key: "type", hidden: true },
    {
      label: "Status",
      key: "status",
      hidden: true,
      renderCell: (item) => (
        <Badge className="text-xs" variant="outline">
          {item.status}
        </Badge>
      ),
    },
    { label: "Date", key: "date", hidden: true },
    {
      label: "Amount",
      key: "amount",
      hidden: false,
      renderCell: (item) => item.amount,
    },
  ];

  const tableData = [
    {
      customer: "Liam Johnson",
      email: "liam@example.com",
      type: "Short-term",
      status: "Active",
      date: "2023-06-23",
      amount: "$1,000.00",
    },
    {
      customer: "Olivia Smith",
      email: "olivia@example.com",
      type: "Long-term",
      status: "Inactive",
      date: "2023-06-24",
      amount: "$2,000.00",
    },
    {
      customer: "Noah Williams",
      email: "noah@example.com",
      type: "Short-term",
      status: "Active",
      date: "2023-06-25",
      amount: "$1,500.00",
    },
    {
      customer: "Emma Brown",
      email: "emma@example.com",
      type: "Long-term",
      status: "Active",
      date: "2023-06-26",
      amount: "$2,500.00",
    },
    {
      customer: "Sophia Johnson",
      email: "sophia@example.com",
      type: "Short-term",
      status: "Active",
      date: "2023-06-27",
      amount: "$1,200.00",
    },
  ];

  return (
    <aside className="flex flex-col w-full gap-4  px-8 py-4 max-md:pt-32">
      <h1 className="text-4xl w-full px-8 font-bold">Dashboard</h1>
      <ScrollArea className="flex flex-col h-full gap-4 w-full py-4">
        <ScrollBar orientation="horizontal" />
        <div className="flex flex-row gap-4 w-full">
          {cardData.map((card, index) => (
            <OverviewCard key={index} {...card} />
          ))}
        </div>
      </ScrollArea>

      <div className="flex flex-col md:flex-row gap-4 w-full ">
        <BarChartComponent data={data} config={config} />
        <SlateTable headers={headers} data={tableData} />
      </div>
    </aside>
  );
}
