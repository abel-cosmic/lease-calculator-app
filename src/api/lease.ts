import axios from "axios";

export const fetchLeases = async (): Promise<LeaseResponse> => {
  const response = await axios.get("/api/leases");
  return response.data;
};

export const fetchLeaseById = async (
  id: string
): Promise<LeaseDetailResponse> => {
  const response = await axios.get(`/api/leases?id=${id}`);
  return response.data;
};

export const createLease = async (
  data: CreateLeaseResponse
): Promise<CreateLeaseResponse> => {
  const response = await axios.post("/api/leases", data);
  return response.data;
};

export const updateLease = async (
  id: string,
  data: UpdateLeaseResponse
): Promise<UpdateLeaseResponse> => {
  const response = await axios.put(`/api/leases?id=${id}`, data);
  return response.data;
};

export const deleteLease = async (id: string): Promise<DeleteLeaseResponse> => {
  const response = await axios.delete(`/api/leases?id=${id}`);
  return response.data;
};
