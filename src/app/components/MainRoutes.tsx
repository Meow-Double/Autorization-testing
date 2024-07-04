import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import { ProfilePage } from '@/pages';
import { Layout } from './Layout';

export const MainRoutes = (): ReactNode => (
  <Routes>
    {/* <Route path={ROUTES.HOME} element={<Layout />}>
      <Route index element={< />} />
    </Route> */}

    <Route path={ROUTES.PROFILE} element={<Layout />}>
      <Route index element={<ProfilePage />} />
    </Route>
  </Routes>
);
