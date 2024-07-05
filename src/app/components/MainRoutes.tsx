import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import { ProfilePage } from '@/pages';
import { Layout } from './Layout';

export const MainRoutes = (): ReactNode => (
  <Routes>
    <Route path={ROUTES.PROFILE} element={<Layout />}>
      <Route index element={<ProfilePage />} />
    </Route>
    <Route path='/*' element={<Navigate to='/profile' />} />
  </Routes>
);
