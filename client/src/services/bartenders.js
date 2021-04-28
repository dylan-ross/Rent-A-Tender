import api from './apiConfig';

export const getAllBartenders = async () => {
  const resp = await api.get('/foods');
  return resp.data;
}

export const getOneBartender = async (id) => {
  const resp = await api.get(`/jobs/${id}`);
  return resp.data;
}

export const postBartender = async (jobData) => {
  const resp = await api.post('/jobs', { job: jobData });
  return resp.data;
}

export const putBartender = async (id, jobData) => {
  const resp = await api.put(`/jobs/${id}`, { job: jobData });
  return resp.data;
}