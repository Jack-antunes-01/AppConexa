import React from 'react';

import { useUserContext } from '@app/contexts/userContext';
import { DrawerRoutes } from '@app/routes/drawer.routes';
import { HomeStackParamList } from '@app/routes/stacks/home.routes';
import { LoginStack, LoginStackParamList } from '@app/routes/stacks/login.routes';

export type RootStackParamList = HomeStackParamList & LoginStackParamList;

export function AppRoutes() {
  const { user } = useUserContext();

  return (user.email ? <DrawerRoutes /> : <LoginStack />);
}
