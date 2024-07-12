import { api } from '@/api/instance';

interface postChangePassParams {
  password: string;
  token: string;
}

type postChangePassConfig = AxiosRequestConfig<postChangePassParams>;

export const postChangePass = ({ params, config }: postChangePassConfig) =>
  api.post<MoneyTypes>('/change-pass', params, config);
