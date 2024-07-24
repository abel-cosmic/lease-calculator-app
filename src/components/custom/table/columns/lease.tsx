"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

import { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { LeaseAction } from "../action/lease";

export const leaseColumns: ColumnDef<Leases>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "leaseStartDate",
    header: () => <div className="text-left">Lease Start Date</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("leaseStartDate")}
      </div>
    ),
  },
  {
    accessorKey: "leaseEndDate",
    header: () => <div className="text-left">Lease End Date</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("leaseEndDate")}
      </div>
    ),
  },
  {
    accessorKey: "monthlyRentAmount",
    header: () => <div className="text-left">Monthly Rent Amount</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("monthlyRentAmount")}
      </div>
    ),
  },
  {
    accessorKey: "securityDeposit",
    header: () => <div className="text-left">Security Deposit</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("securityDeposit")}
      </div>
    ),
  },
  {
    accessorKey: "additionalCharges",
    header: () => <div className="text-left">Additional Charges</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("additionalCharges")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <LeaseAction row={row} />;
    },
  },
];
