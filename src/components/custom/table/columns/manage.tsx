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
      const user = row.original.user;
      return (
        <div className="text-left font-medium">
          {user ? `${user.firstName} ${user.lastName}` : "Unknown User"}
        </div>
      );
    },
  },
  {
    accessorKey: "assignmentDate",
    header: () => <div className="text-left">Assignment Date</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {row.original.assignmentDate}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const status = row.original.status;
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
