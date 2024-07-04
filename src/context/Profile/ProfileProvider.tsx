import { useState } from 'react';
import { ProfileContext } from './ProfileContext';

interface ProfileProviderProps {
  children: React.ReactNode;
  moneyCount: number;
}

export const ProfileProvider = ({ children, moneyCount }: ProfileProviderProps) => {
  const [money, setMoney] = useState<number>(moneyCount);

  return <ProfileContext.Provider value={{ money, setMoney }}>{children}</ProfileContext.Provider>;
};
