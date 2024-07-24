import { ManageLeaseSchema } from "@/util/schema/manage";
import axios from "axios";
import { z } from "zod";

export const fetchManageLeases = async (): Promise<ManageLeaseResponse> => {
  const response = await axios.get("/api/manage");
  return response.data;
};

export const fetchManageLeaseById = async (
  id: string
): Promise<ManageLeaseDetailResponse> => {
  const response = await axios.get(`/api/manage/${id}`);
  return response.data;
};

export interface mutateManageLeaseResponse
  extends z.infer<typeof ManageLeaseSchema> {}
export const createManageLease = async (
  data: mutateManageLeaseResponse
): Promise<mutateManageLeaseResponse> => {
  const response = await axios.post("/api/manage", data);
  return response.data;
};

export const updateManageLease = async (
  id: string,
  data: mutateManageLeaseResponse
): Promise<mutateManageLeaseResponse> => {
  const response = await axios.put(`/api/manage/${id}`, data);
  return response.data;
};

export const deleteManageLease = async (
  id: string
): Promise<DeleteManageLeaseResponse> => {
  const response = await axios.delete(`/api/manage/${id}`);
  return response.data;
};
