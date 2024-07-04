import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='container'>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
