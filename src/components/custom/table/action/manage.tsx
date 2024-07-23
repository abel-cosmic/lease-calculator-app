"use client";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDeleteManageLeaseMutation } from "@/hooks/manage";

export const ManageLeaseAction = ({ row }: { row: Row<any> }) => {
  const manageLease = row.original;
  const router = useRouter();
  const { mutate: deleteManageLease } = useDeleteManageLeaseMutation(
    manageLease.id
  );

  const handleDelete = () => {
    deleteManageLease(null, {
      onSuccess: () => {
        toast.success("Lease deleted successfully");
      },
      onError: () => {
        toast.error("Error deleting lease");
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() =>
            router.push(`/dashboard/manage/view/${manageLease.user.id}`)
          }
        >
          <Eye className="mr-2 h-4 w-4 text-blue-500" />
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            router.push(`/dashboard/manage/edit/${manageLease.user.id}`)
          }
        >
          <Edit className="mr-2 h-4 w-4 text-green-500" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>
          <Trash className="mr-2 h-4 w-4 text-red-500" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
