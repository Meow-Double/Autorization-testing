import { AuthPage, LoginPage, ResetPassPage } from '@/pages';
import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import { Layout } from './Layout';

export const AuthRoutes = (): ReactNode => (
  <Routes>
    <Route path={ROUTES.AUTH} element={<Layout />}>
      <Route index element={<AuthPage />} />
    </Route>
    <Route path={ROUTES.LOGIN} element={<Layout />}>
      <Route index element={<LoginPage />} />
    </Route>
    <Route path={ROUTES.RESSPASS} element={<Layout />}>
      <Route index element={<Navigate to='/auth' />} />
      <Route index path=':token' element={<ResetPassPage />} />
    </Route>
    <Route path='/*' element={<Navigate to='/auth' />} />
  </Routes>
);
