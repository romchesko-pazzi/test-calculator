import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Global } from 'assets/global';
import { ThemeEnum } from 'assets/interfaces/styled';
import { darkTheme, lightTheme } from 'assets/theme';
import { Header } from 'components/header';
import { useAppSelector } from 'hooks/useSelector';
import { Home } from 'pages/home';
import { HomeCC } from 'pages/homeCC';
import { Settings } from 'pages/settings';

export const App = () => {
  const currentTheme = useAppSelector(state => state.theme.theme);

  return (
    <ThemeProvider theme={currentTheme === ThemeEnum.light ? lightTheme : darkTheme}>
      <Global />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/CC" element={<HomeCC />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
