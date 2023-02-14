import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'components/header';
import { Home } from 'pages/home';
import { Settings } from 'pages/settings';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
