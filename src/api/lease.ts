import { LeaseFormSchema } from "@/util/schema/lease";
import axios from "axios";
import { z } from "zod";

export const fetchTotalRent = async (): Promise<TotalRentResponse> => {
  const response = await axios.get("/api/lease/total-rent");
  return response.data;
};

export const fetchLeases = async (): Promise<LeaseResponse> => {
  const response = await axios.get("/api/lease");
  return response.data;
};

export const fetchLeaseById = async (
  id: string
): Promise<LeaseDetailResponse[]> => {
  const response = await axios.get(`/api/lease?id=${id}`);
  return response.data;
};

export interface mutateLeaseResponse extends z.infer<typeof LeaseFormSchema> {}

export const createLease = async (
  data: mutateLeaseResponse
): Promise<mutateLeaseResponse> => {
  const response = await axios.post("/api/lease", data);
  return response.data;
};

export const updateLease = async (
  id: string,
  data: mutateLeaseResponse
): Promise<mutateLeaseResponse> => {
  const response = await axios.patch(`/api/lease/${id}`, data);
  return response.data;
};

export const deleteLease = async (id: string): Promise<DeleteLeaseResponse> => {
  const response = await axios.delete(`/api/lease?id=${id}`);
  return response.data;
};
