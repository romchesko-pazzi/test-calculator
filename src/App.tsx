import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeEnum } from './constants/themes';

import { Global } from 'assets/global';
import { darkTheme, lightTheme } from 'assets/theme';
import { Header } from 'components/header';
import { Home } from 'pages/home';
import { HomeCC } from 'pages/homeCC';
import { Settings } from 'pages/settings';

export const App = () => {
  const [theme, setTheme] = useState(ThemeEnum.light);

  useEffect(() => {
    const currentTheme = localStorage.getItem('storedTheme');

    if (currentTheme) {
      setTheme(currentTheme as ThemeEnum);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === ThemeEnum.light ? lightTheme : darkTheme}>
      <Global />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/CC" element={<HomeCC />} />
          <Route
            path="settings"
            element={<Settings theme={theme} setTheme={setTheme} />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
