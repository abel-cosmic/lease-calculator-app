import {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} from "@/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetUsersQuery = () =>
  useQuery({
    queryKey: ["Get Users"],
    queryFn: fetchUsers,
  });


export const useGetUserQuery = (id: string) =>
  useQuery({
    queryKey: ["Get User", id],
    queryFn: () => fetchUserById(id),
  });

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Create User"],
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Get Users"] }),
  });
};

export const useUpdateUserMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Update User", id],
    mutationFn: (data: User) => updateUser(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get User", id] }),
  });
};

export const useDeleteUserMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Delete User", id],
    mutationFn: () => deleteUser(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Get Users"] }),
  });
};
