import {
  createManageLease,
  deleteManageLease,
  fetchManageLeaseById,
  fetchManageLeases,
  updateManageLease,
} from "@/api/manage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetManageLeasesQuery = () =>
  useQuery({
    queryKey: ["Get Manage Leases"],
    queryFn: fetchManageLeases,
  });

export const useGetManageLeaseQuery = (id: string) =>
  useQuery({
    queryKey: ["Get Manage Lease", id],
    queryFn: () => fetchManageLeaseById(id),
  });

export const useCreateManageLeaseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Create Manage Lease"],
    mutationFn: createManageLease,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Manage Leases"] }),
  });
};

export const useUpdateManageLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Update Manage Lease", id],
    mutationFn: (data: ManageLeases) => updateManageLease(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Manage Lease", id] }),
  });
};

export const useDeleteManageLeaseMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Delete Manage Lease", id],
    mutationFn: () => deleteManageLease(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get Leases"] }),
  });
};
