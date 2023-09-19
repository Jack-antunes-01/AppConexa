import React from 'react';
import { Button } from 'react-native';

import { NeedHelpLocales } from '@app/pages/NeedHelp/locales';
import * as S from '@app/pages/NeedHelp/styles';
import { useNeedHelp } from '@app/pages/NeedHelp/useNeedHelp';

function NeedHelp() {
  const { goBack } = useNeedHelp();

  return (
    <S.Container>
      <Button title={NeedHelpLocales.title} onPress={goBack} />
    </S.Container>
  );
}

export { NeedHelp };
