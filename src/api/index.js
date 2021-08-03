import axios from 'axios';

export const APIService = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
