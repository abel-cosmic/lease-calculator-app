import { ManageLeaseSchema } from "@/util/schema/manage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

// Define types based on the schema
interface ManageLeaseData extends z.infer<typeof ManageLeaseSchema> {}

const fetchManageLeases = async () => {
  const response = await axios.get("/api/manageLeases");
  return response.data;
};

const fetchManageLeaseById = async (id: string) => {
  const response = await axios.get(`/api/manageLeases?id=${id}`);
  return response.data;
};

const createManageLease = async (data: ManageLeaseData) => {
  const response = await axios.post("/api/manageLeases", data);
  return response.data;
};

const updateManageLease = async (id: string, data: ManageLeaseData) => {
  const response = await axios.put(`/api/manageLeases?id=${id}`, data);
  return response.data;
};

const deleteManageLease = async (id: string) => {
  const response = await axios.delete(`/api/manageLeases?id=${id}`);
  return response.data;
};

// Fetch all manage leases
export const useGetManageLeasesQuery = () =>
  useQuery({
    queryKey: ["Get ManageLeases"],
    queryFn: fetchManageLeases,
  });

// Fetch a manage lease by ID
export const useGetManageLeaseQuery = (id: string) =>
  useQuery({
    queryKey: ["Get ManageLease", id],
    queryFn: () => fetchManageLeaseById(id),
  });

// Create a new manage lease
export const useCreateManageLeaseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Create ManageLease"],
    mutationFn: createManageLease,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get ManageLeases"] }),
  });
};

// Update a manage lease by ID
export const useUpdateManageLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Update ManageLease", id],
    mutationFn: (data: ManageLeaseData) => updateManageLease(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get ManageLease", id] }),
  });
};

// Delete a manage lease by ID
export const useDeleteManageLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Delete ManageLease", id],
    mutationFn: () => deleteManageLease(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get ManageLeases"] }),
  });
};
