import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/components/Header';
import { routes } from '@/constants/routes';
import { Home } from '@/pages/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        {routes.map(({ id, path, component }) => {
          return <Route key={id} path={path} element={component} />;
        })}
      </Route>
    </Routes>
  );
};
