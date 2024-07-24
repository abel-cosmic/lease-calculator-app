"use client";

import LoadingElement from "@/components/custom/loaders";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { useGetUserQuery } from "@/hooks/user";
import { useParams } from "next/navigation";

export default function UserViewPage() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useGetUserQuery(id as string);
  console.log(user);

  if (isLoading) return <LoadingElement />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <aside className="flex flex-col w-full gap-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Users/View" />
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">User Details</h2>
        <div className="mt-4">
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(user.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(user.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </aside>
  );
}
