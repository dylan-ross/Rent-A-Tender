import api from './apiConfig';

export const getAllUsers = async () => {
  const resp = await api.get('/bartenders');
  return resp.data;
}

export const getOneUser = async (id) => {
  const resp = await api.get(`/bartenders/${id}`);
  return resp.data;
}

export const postUser = async (userData) => {
  const resp = await api.post('/user', { user: userData });
  return resp.data;
}