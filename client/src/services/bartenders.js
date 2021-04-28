import api from './apiConfig';

export const getAllBartenders = async () => {
  const resp = await api.get('/bartenders');
  return resp.data;
}

export const getOneBartender = async (id) => {
  const resp = await api.get(`/bartenders/${id}`);
  return resp.data;
}

export const postBartender = async (bartenderData) => {
  const resp = await api.post('/bartender', { bartender: bartenderData });
  return resp.data;
}

export const putBartender = async (id, bartenderData) => {
  const resp = await api.put(`/jobs/${id}`, { bartender: bartenderData });
  return resp.data;
}