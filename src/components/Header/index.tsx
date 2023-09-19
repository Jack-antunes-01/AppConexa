import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SVGLogo from '@app/assets/images/svg/logo.svg';
import SVGUser from '@app/assets/images/svg/user.svg';
import * as S from '@app/components/Header/styles';
import { useHeader } from '@app/components/Header/useHeader';

type HeaderProps = {
  mainHeader?: boolean;
};

function Header({ mainHeader = false }: HeaderProps) {
  const { onUserPressed, onDrawerPressed, onGoBackPressed } = useHeader();

  if (mainHeader) {
    return (
      <S.HeaderContainer>
        <TouchableOpacity onPress={onDrawerPressed}>
          <S.MenuIcon />
        </TouchableOpacity>
        <SVGLogo width={172} />
        <TouchableOpacity onPress={onUserPressed}>
          <SVGUser />
        </TouchableOpacity>
      </S.HeaderContainer>
    );
  }

  return (
    <S.HeaderContainer>
      <TouchableOpacity onPress={onGoBackPressed}>
        <S.ArrowLeft />
      </TouchableOpacity>
    </S.HeaderContainer>
  );
}

export { Header };
