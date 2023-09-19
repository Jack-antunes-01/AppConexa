import React from 'react';

import { InquiryContextProvider } from '@app/contexts/inquiryContext';
import { useUserContext } from '@app/contexts/userContext';
import { DrawerRoutes } from '@app/routes/drawer.routes';
import { HomeStackParamList } from '@app/routes/stacks/home.routes';
import { LoginStack, LoginStackParamList } from '@app/routes/stacks/login.routes';

export type RootStackParamList = HomeStackParamList & LoginStackParamList;

export function AppRoutes() {
  const { user } = useUserContext();

  // Aqui seria outro parâmetro, tipo um isAuthenticated
  return (user.email ? (
    <InquiryContextProvider>
      <DrawerRoutes />
    </InquiryContextProvider>
  ) : <LoginStack />);
}
