  
import api from './apiConfig';

export const getAllJobs = async () => {
  const resp = await api.get('/foods');
  return resp.data;
}

export const getOneJob = async (id) => {
  const resp = await api.get(`/jobs/${id}`);
  return resp.data;
}

export const postJobs = async (jobData) => {
  const resp = await api.post('/jobs', { job: jobData });
  return resp.data;
}

export const putjob = async (id, jobData) => {
  const resp = await api.put(`/jobs/${id}`, { job: jobData });
  return resp.data;
}

export const deleteJob = async (id) => {
  const resp = await api.delete(`/jobs/${id}`);
  return resp;
}