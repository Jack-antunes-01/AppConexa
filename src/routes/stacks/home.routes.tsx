import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home } from '@app/pages/Home';
import { Routes } from '@app/routes/routes';

export type HomeStackParamList = {
  [Routes.HomePage]: undefined;
};

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HomePage} component={Home} />
    </Stack.Navigator>
  );
}
