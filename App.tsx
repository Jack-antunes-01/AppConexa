import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';

import { UserContextProvider } from '@app/contexts/userContext';
import { AppRoutes } from '@app/routes';
import themes from '@app/themes';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={themes}>
        <UserContextProvider>
          <AppRoutes />
        </UserContextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
