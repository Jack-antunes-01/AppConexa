import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { Routes } from '@app/routes/routes';
import { HomeStack } from '@app/routes/stacks/home.routes';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={Routes.Home} component={HomeStack} />
    </Drawer.Navigator>
  );
}
