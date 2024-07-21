"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SlateTable = ({ headers, data }) => {
  return (
    <Table className="w-full h-full">
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={header.hidden ? "hidden xl:table-column" : ""}
            >
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header, colIndex) => (
              <TableCell
                key={colIndex}
                className={header.hidden ? "hidden xl:table-column" : ""}
              >
                {header.renderCell ? header.renderCell(item) : item[header.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SlateTable;
