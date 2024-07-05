import { api } from '@/api/instance';

interface postLoginParams {
  email: string;
  password: string;
}

type postLoginConfig = AxiosRequestConfig<postLoginParams>

export const postLogin = ({ params, config }: postLoginConfig) => api.post('/login', params, config);
