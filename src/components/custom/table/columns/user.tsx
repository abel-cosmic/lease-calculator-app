"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

import { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { UserAction } from "../action/user";

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "firstName",
    header: () => <div className="text-left">First Name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: () => <div className="text-left">Last Name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left">Email</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-left">Phone Number</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("phone")}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <UserAction row={row} />;
    },
  },
];
