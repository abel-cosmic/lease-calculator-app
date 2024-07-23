"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ManageLeaseAction } from "../action/manage";

export const manageColumns: ColumnDef<ManageLeases>[] = [
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
    accessorKey: "user",
    header: () => <div className="text-left">User</div>,
    cell: ({ row }) => {
      const user = row.getValue("user") as PartialUser;
      return (
        <div className="text-left font-medium">
          {user.firstName} {user.lastName}
        </div>
      );
    },
  },
  {
    accessorKey: "lease",
    header: () => <div className="text-left">Monthly Rent Amount</div>,
    cell: ({ row }) => {
      const lease = row.getValue("lease") as PartialLease;
      return (
        <div className="text-left font-medium">
          ${lease.monthlyRentAmount.toFixed(2)}
        </div>
      );
    },
  },
  {
    accessorKey: "assignmentDate",
    header: () => <div className="text-left">Assignment Date</div>,
    cell: ({ row }) => {
      const assignmentDate = row.getValue("assignmentDate") as Date;
      return (
        <div className="text-left font-medium">
          {assignmentDate.toLocaleDateString()}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as
        | "active"
        | "inactive"
        | "terminated";
      let statusColor = "";
      switch (status) {
        case "active":
          statusColor = "bg-green-500";
          break;
        case "inactive":
          statusColor = "bg-yellow-500";
          break;
        case "terminated":
          statusColor = "bg-red-500";
          break;
      }
      return (
        <div className="text-left font-medium">
          <Badge variant="outline" className={statusColor}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <ManageLeaseAction row={row} />;
    },
  },
];
