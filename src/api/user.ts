import { UserSchema } from "@/util/schema/user";
import axios from "axios";
import { z } from "zod";

export const fetchUsers = async (): Promise<UserResponse> => {
  const response = await axios.get("/api/user");
  return response.data;
};

export const fetchUserById = async (
  id: string
): Promise<UserDetailResponse> => {
  const response = await axios.get(`/api/user/${id}`);
  return response.data;
};
export interface mutateUserResponse extends z.infer<typeof UserSchema> {}
export const createUser = async (
  data: mutateUserResponse
): Promise<mutateUserResponse> => {
  const response = await axios.post("/api/user", data);
  return response.data;
};

export const updateUser = async (
  id: string,
  data: mutateUserResponse
): Promise<mutateUserResponse> => {
  const response = await axios.put(`/api/user?id=${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string): Promise<DeleteUserResponse> => {
  const response = await axios.delete(`/api/user?id=${id}`);
  return response.data;
};
