import axios from "axios";

export const fetchManageLeases = async (): Promise<ManageLeaseResponse> => {
  const response = await axios.get("/api/manage");
  return response.data;
};

export const fetchManageLeaseById = async (
  id: string
): Promise<ManageLeaseDetailResponse> => {
  const response = await axios.get(`/api/manage?id=${id}`);
  return response.data;
};

export const createManageLease = async (
  data: CreateManageLeaseResponse
): Promise<CreateManageLeaseResponse> => {
  const response = await axios.post("/api/manage", data);
  return response.data;
};

export const updateManageLease = async (
  id: string,
  data: UpdateManageLeaseResponse
): Promise<UpdateManageLeaseResponse> => {
  const response = await axios.put(`/api/manage?id=${id}`, data);
  return response.data;
};

export const deleteManageLease = async (
  id: string
): Promise<DeleteManageLeaseResponse> => {
  const response = await axios.delete(`/api/manage?id=${id}`);
  return response.data;
};
