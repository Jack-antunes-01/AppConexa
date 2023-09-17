import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AppRoutes } from '@app/routes';
// import themes from '@app/themes';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={themes}>

        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
