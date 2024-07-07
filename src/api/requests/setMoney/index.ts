import { api } from '@/api/instance';

interface postSetMoneyParams {
  money: number;
}

type postSetMoneyConfig = AxiosRequestConfig<postSetMoneyParams>;

export const postSetMoney = ({ params, config }: postSetMoneyConfig) =>
  api.post<MoneyTypes>('/setMoney', params, config);
