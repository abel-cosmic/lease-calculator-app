"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./pagination";
import { Card, CardContent } from "@/components/ui/card";
import { DataTableViewOptions } from "./toogle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  DialogContentComponent: React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  DialogContentComponent,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Card className="flex flex-col gap-4 p-8 items-end justify-end w-full">
      <CardContent className="flex flex-col gap-4 md:p-8 items-end justify-end  max-md:p-0 mx-md:justify-between w-full max-md:pr-20 max-md:items-start">
        <div className="flex flex-row items-end gap-4 justify-end w-fit mb-4">
          <Dialog>
            <DialogTrigger className="self-end">
              <Button>Create</Button>
            </DialogTrigger>
            <DialogContent>{DialogContentComponent}</DialogContent>
          </Dialog>
          <DataTableViewOptions table={table} />
        </div>
        <ScrollArea className="flex flex-col h-full max-md:w-96 w-full">
          <ScrollBar orientation="horizontal" />
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
        <DataTablePagination table={table} />
      </CardContent>
    </Card>
  );
}
