import { api } from '@/api/instance';

interface postActivatedParams {
  email: string;
}

type postActivatedConfig = AxiosRequestConfig<postActivatedParams>;

export const postActivated = ({ params, config }: postActivatedConfig) =>
  api.post('/is-activated', params, config);
