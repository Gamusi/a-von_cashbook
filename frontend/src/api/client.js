import axios from 'axios'
import { API_BASE_URL } from '../config/env'
import { useAuthStore } from '../store/authStore'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request Interceptor
client.interceptors.request.use(cfg => {
  const token = useAuthStore.getState().token
  if (token) {
    cfg.headers.Authorization = `Bearer ${token}`
  }
  return cfg
})

// Response Interceptor
client.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response?.status === 401) {
      useAuthStore.getState().logout()
    }
    return Promise.reject(err)
  }
)

export default client
