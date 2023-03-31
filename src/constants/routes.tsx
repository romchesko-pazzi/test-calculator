import { v4 } from 'uuid';

import { path } from '@/constants/paths';
import { HomeCC } from '@/pages/homeCC';
import { Settings } from '@/pages/settings';

export const routes = [
  { id: v4(), path: path.classHome, component: <HomeCC /> },
  { id: v4(), path: path.settings, component: <Settings /> },
];
