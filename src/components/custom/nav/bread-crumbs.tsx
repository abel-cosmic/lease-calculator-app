// components/Breadcrumbs.jsx

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";

const Breadcrumbs = ({ path }) => {
  // Split the path into parts for breadcrumbs
  const pathParts = path.split("/").filter((part) => part);

  return (
    <BreadcrumbList>
      {pathParts.map((part, index) => {
        const href =
          "/" +
          pathParts
            .slice(0, index + 1)
            .join("/")
            .toLowerCase();
        const isLast = index === pathParts.length - 1;

        return (
          <Fragment key={index}>
            <BreadcrumbItem>
              {isLast ? (
                <BreadcrumbPage>{part}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={href}>{part}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < pathParts.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        );
      })}
    </BreadcrumbList>
  );
};

export default Breadcrumbs;
