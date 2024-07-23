import {
  createLease,
  deleteLease,
  fetchLeaseById,
  fetchLeases,
  updateLease,
} from "@/api/lease";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetLeasesQuery = () =>
  useQuery({
    queryKey: ["Get Leases"],
    queryFn: fetchLeases,
  });

export const useGetLeaseQuery = (id: string) =>
  useQuery({
    queryKey: ["Get Lease", id],
    queryFn: () => fetchLeaseById(id),
  });

export const useCreateLeaseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Create Lease"],
    mutationFn: createLease,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Leases"] }),
  });
};

export const useUpdateLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Update Lease", id],
    mutationFn: (data: Leases) => updateLease(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Lease", id] }),
  });
};

export const useDeleteLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Delete Lease", id],
    mutationFn: () => deleteLease(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Leases"] }),
  });
};
