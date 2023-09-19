import React from 'react';
import { Button, Text } from 'react-native';

import * as S from '@app/pages/Home/styles';

import { useHome } from './useHome';

export function Home() {
  const { onSignIn } = useHome();

  return (
    <S.Container>
      <Text style={{ color: 'black', padding: 50 }}>Caiu aqui</Text>
      <Button
        title="Login!"
        onPress={onSignIn}
      />
    </S.Container>
  );
}
