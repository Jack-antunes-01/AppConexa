import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ForgotPassword } from '@app/pages/ForgotPassword';
import { Login } from '@app/pages/Login';
import { NeedHelp } from '@app/pages/NeedHelp';
import { SignUp } from '@app/pages/SignUp';
import { Routes } from '@app/routes/routes';

export type LoginStackParamList = {
  [Routes.Login]: undefined;
  [Routes.SignUp]: undefined;
  [Routes.NeedHelp]: undefined;
  [Routes.ForgotPassword]: undefined;
};

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
      <Stack.Screen name={Routes.NeedHelp} component={NeedHelp} />
      <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
    </Stack.Navigator>
  );
}
