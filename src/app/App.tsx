import { BrowserRouter } from 'react-router-dom';
import { MainRoutes, AuthRoutes } from './components';
import { useState } from 'react';
import { ProfileProvider } from '@/context/Profile/ProfileProvider';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  // return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>;
  return (
    <ProfileProvider moneyCount={0}>
      <BrowserRouter>{isAuth ? <MainRoutes /> : <MainRoutes />}</BrowserRouter>;
    </ProfileProvider>
  );
};
