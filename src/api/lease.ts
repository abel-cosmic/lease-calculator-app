import axios from "axios";

export const fetchLeases = async (): Promise<LeaseResponse> => {
  const response = await axios.get("/api/lease");
  return response.data;
};

export const fetchLeaseById = async (
  id: string
): Promise<LeaseDetailResponse> => {
  const response = await axios.get(`/api/lease?id=${id}`);
  return response.data;
};

export const createLease = async (
  data: CreateLeaseResponse
): Promise<CreateLeaseResponse> => {
  const response = await axios.post("/api/lease", data);
  return response.data;
};

export const updateLease = async (
  id: string,
  data: UpdateLeaseResponse
): Promise<UpdateLeaseResponse> => {
  const response = await axios.put(`/api/lease?id=${id}`, data);
  return response.data;
};

export const deleteLease = async (id: string): Promise<DeleteLeaseResponse> => {
  const response = await axios.delete(`/api/lease?id=${id}`);
  return response.data;
};
