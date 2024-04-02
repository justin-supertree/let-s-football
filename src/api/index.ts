import axios from 'axios';
import { getSession } from 'next-auth/react';

const baseURL = process.env.NEXT_PUBLIC_API_HOST ?? '';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session) {
    config.headers['Authorization'] = `Bearer ${session.user.jwt}`;
  }

  return config;
});

export default api;
