import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { InquiryModel } from '@app/models/inquiry';
import { Home } from '@app/pages/Home';
import { InquiryDetails } from '@app/pages/InquiryDetails';
import { InquirySuccess } from '@app/pages/InquirySuccess';
import { Routes } from '@app/routes/routes';

export type HomeStackParamList = {
  [Routes.HomePage]: undefined;
  [Routes.InquiryDetails]: {
    inquiry: InquiryModel;
  };
  [Routes.InquirySuccess]: undefined;
};

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HomePage} component={Home} />
      <Stack.Screen name={Routes.InquiryDetails} component={InquiryDetails} />
      <Stack.Screen name={Routes.InquirySuccess} component={InquirySuccess} />
    </Stack.Navigator>
  );
}
