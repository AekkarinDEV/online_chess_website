import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL as string
export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
})
