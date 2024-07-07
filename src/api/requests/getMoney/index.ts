import { api } from '@/api/instance';

type getMoneyConfig = AxiosRequestConfig;

export const getMoney = ({ config }: getMoneyConfig) => api.get<MoneyTypes>('/getMoney', config);
