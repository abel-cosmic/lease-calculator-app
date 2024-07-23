import axios from "axios";

export const fetchUsers = async (): Promise<UserResponse> => {
  const response = await axios.get("/api/users");
  return response.data;
};

export const fetchUserById = async (
  id: string
): Promise<UserDetailResponse> => {
  const response = await axios.get(`/api/users?id=${id}`);
  return response.data;
};

export const createUser = async (
  data: CreateUserResponse
): Promise<CreateUserResponse> => {
  const response = await axios.post("/api/users", data);
  return response.data;
};

export const updateUser = async (
  id: string,
  data: UpdateUserResponse
): Promise<UpdateUserResponse> => {
  const response = await axios.put(`/api/users?id=${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string): Promise<DeleteUserResponse> => {
  const response = await axios.delete(`/api/users?id=${id}`);
  return response.data;
};
