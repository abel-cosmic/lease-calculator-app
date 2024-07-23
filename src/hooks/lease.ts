import { LeaseSchema } from "@/util/schema/lease";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

// Define types based on the schema
interface LeaseData extends z.infer<typeof LeaseSchema> {}

const fetchLeases = async () => {
  const response = await axios.get("/api/leases");
  return response.data;
};

const fetchLeaseById = async (id: string) => {
  const response = await axios.get(`/api/leases?id=${id}`);
  return response.data;
};

const createLease = async (data: LeaseData) => {
  const response = await axios.post("/api/leases", data);
  return response.data;
};

const updateLease = async (id: string, data: LeaseData) => {
  const response = await axios.put(`/api/leases?id=${id}`, data);
  return response.data;
};

const deleteLease = async (id: string) => {
  const response = await axios.delete(`/api/leases?id=${id}`);
  return response.data;
};

// Fetch all leases
export const useGetLeasesQuery = () =>
  useQuery({
    queryKey: ["Get Leases"],
    queryFn: fetchLeases,
  });

// Fetch a lease by ID
export const useGetLeaseQuery = (id: string) =>
  useQuery({
    queryKey: ["Get Lease", id],
    queryFn: () => fetchLeaseById(id),
  });

// Create a new lease
export const useCreateLeaseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Create Lease"],
    mutationFn: createLease,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Leases"] }),
  });
};

// Update a lease by ID
export const useUpdateLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Update Lease", id],
    mutationFn: (data: LeaseData) => updateLease(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Lease", id] }),
  });
};

// Delete a lease by ID
export const useDeleteLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Delete Lease", id],
    mutationFn: () => deleteLease(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Leases"] }),
  });
};
