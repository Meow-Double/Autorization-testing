import { createContext } from 'react';

export type ProfileContextTypes = {
  money: number;
  setMoney: (state: number) => void;
  setIsAuth: (state: boolean) => void;
};

export const ProfileContext = createContext<ProfileContextTypes>({
  money: 0,
  setMoney: () => {},
  setIsAuth: () => {}
});
