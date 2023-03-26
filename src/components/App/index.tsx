import React from 'react';

import { Global } from '@/assets/global';
import { AppRoutes } from '@/components/Routes';
import { Theme } from '@/context/themeProvider';

export const App = () => {
  return (
    <Theme>
      <Global />
      <AppRoutes />
    </Theme>
  );
};
