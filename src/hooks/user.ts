import { UserSchema } from "@/util/schema/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

// Define types based on the schema
interface UserData extends z.infer<typeof UserSchema> {}

const fetchUsers = async () => {
  const response = await axios.get("/api/users");
  return response.data;
};

const fetchUserById = async (id: string) => {
  const response = await axios.get(`/api/users?id=${id}`);
  return response.data;
};

const createUser = async (data: UserData) => {
  const response = await axios.post("/api/users", data);
  return response.data;
};

const updateUser = async (id: string, data: UserData) => {
  const response = await axios.put(`/api/users?id=${id}`, data);
  return response.data;
};

const deleteUser = async (id: string) => {
  const response = await axios.delete(`/api/users?id=${id}`);
  return response.data;
};

// Fetch all users
export const useGetUsersQuery = () =>
  useQuery({
    queryKey: ["Get Users"],
    queryFn: fetchUsers,
  });

// Fetch a user by ID
export const useGetUserQuery = (id: string) =>
  useQuery({
    queryKey: ["Get User", id],
    queryFn: () => fetchUserById(id),
  });

// Create a new user
export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Create User"],
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Get Users"] }),
  });
};

// Update a user by ID
export const useUpdateUserMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Update User", id],
    mutationFn: (data: UserData) => updateUser(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Get User", id] }),
  });
};

// Delete a user by ID
export const useDeleteUserMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Delete User", id],
    mutationFn: () => deleteUser(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Get Users"] }),
  });
};
