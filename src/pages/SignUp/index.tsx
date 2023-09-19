import React from 'react';
import { Button } from 'react-native';

import { SignUpLocales } from '@app/pages/SignUp/locales';
import * as S from '@app/pages/SignUp/styles';
import { useSignUp } from '@app/pages/SignUp/useSignUp';

function SignUp() {
  const { goBack } = useSignUp();

  return (
    <S.Container>
      <Button title={SignUpLocales.title} onPress={goBack} />
    </S.Container>
  );
}

export { SignUp };
