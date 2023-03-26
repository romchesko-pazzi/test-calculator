import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 } from 'uuid';

import { Header } from '@/components/Header';
import { Home } from '@/pages/home';
import { HomeCC } from '@/pages/homeCC';
import { Settings } from '@/pages/settings';

export const AppRoutes = () => {
  const routes = [
    { id: v4(), path: '/CC', component: <HomeCC /> },
    { id: v4(), path: 'settings', component: <Settings /> },
  ];

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
