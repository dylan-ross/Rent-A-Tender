import api from './apiConfig';

export const signInBartender = async (loginData) => {
  const resp = await api.post('/bar_auth/login', { authentication: loginData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.bartender
}

export const signUpBartender = async (registerData) => {
  const resp = await api.post('/bartenders/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.bartender
}

export const verifyBartender = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/bar_auth/verify');
    return resp.data
  }
  return null
}

export const removeBarToken = () => {
  api.defaults.headers.common.authorization = null
}
