import React from 'react';
import { Button } from 'react-native';

import { ForgotPasswordLocales } from '@app/pages/ForgotPassword/locales';
import * as S from '@app/pages/ForgotPassword/styles';
import { useForgotPassword } from '@app/pages/ForgotPassword/useForgotPassword';

function ForgotPassword() {
  const { goBack } = useForgotPassword();

  return (
    <S.Container>
      <Button title={ForgotPasswordLocales.title} onPress={goBack} />
    </S.Container>
  );
}

export { ForgotPassword };
