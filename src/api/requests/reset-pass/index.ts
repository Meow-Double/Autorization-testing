import { api } from '@/api/instance';

interface postResetPassParams {
  email: string;
}

type postResetPassConfig = AxiosRequestConfig<postResetPassParams>;

export const postResetPass = ({ params, config }: postResetPassConfig) =>
  api.post<MoneyTypes>('/reset-pass', params, config);
