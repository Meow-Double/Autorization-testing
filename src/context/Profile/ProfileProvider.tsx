import { useState } from 'react';
import { ProfileContext } from './ProfileContext';

interface ProfileProviderProps {
  children: React.ReactNode;
  moneyCount: number;
  setIsAuth: (state: boolean) => void;
}

export const ProfileProvider = ({ children, moneyCount, setIsAuth }: ProfileProviderProps) => {
  const [money, setMoney] = useState<number>(moneyCount);

  return (
    <ProfileContext.Provider value={{ money, setMoney, setIsAuth }}>
      {children}
    </ProfileContext.Provider>
  );
};
