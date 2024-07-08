import { BrowserRouter, useNavigate } from 'react-router-dom';
import { MainRoutes, AuthRoutes } from './components';
import { useEffect, useState } from 'react';
import { ProfileProvider } from '@/context/Profile/ProfileProvider';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setIsAuth(true);

      // window.location.pathname = "/profile"
    }
  }, []);
  // return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>;
  return (
    <ProfileProvider moneyCount={0} setIsAuth={setIsAuth}>
      <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>
    </ProfileProvider>
  );
};
