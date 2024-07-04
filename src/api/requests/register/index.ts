import { api } from '@/api/instance';

interface postUserParams {
  email: string;
  name: string;
  password: string;
}

type postUserConfig = AxiosRequestConfig<postUserParams>;

export const postUser = async ({ params, config }: postUserConfig) =>
  await api.post<PostUserTypes>('/register', params, config);
