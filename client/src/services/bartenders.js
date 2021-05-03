import api from "./apiConfig";

export const getAllBartenders = async () => {
  const resp = await api.get("/bartenders");
  return resp.data;
};

export const getOneBartender = async (id) => {
  const resp = await api.get(`/bartenders/${id}`);
  return resp.data;
};

