import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import SVGLogo from '@app/assets/images/svg/logo.svg';
import { AnimatedInput } from '@app/components/AnimatedInput';
import { TEXT_VARIANTS } from '@app/components/Text';
import { LoginLocales } from '@app/pages/Login/locales';
import * as S from '@app/pages/Login/styles';
import { useLogin } from '@app/pages/Login/useLogin';

export function Login() {
  const {
    theme,
    errors,
    control,
    isLoading,
    handleSubmit,
    onSignIn,
    onSignUpPressed,
    onNeedHelpPressed,
    onForgotPasswordPressed,
  } = useLogin();

  return (
    <S.Container>
      <S.LogoContainer>
        <SVGLogo />
      </S.LogoContainer>
      <S.ContentContainer>
        <S.FormContainer>
          <S.TitleText title={LoginLocales.title} isBold />
          <S.InputContainer>
            <AnimatedInput
              control={control}
              label={LoginLocales.inputs.email}
              name="email"
              borderColor={theme.colors.gray.light}
              errors={errors}
              rules={{ rules: { required: LoginLocales.rules.required.email } }}
            />
          </S.InputContainer>
          <S.InputContainer>
            <AnimatedInput
              control={control}
              label={LoginLocales.inputs.password}
              name="senha"
              borderColor={theme.colors.gray.light}
              errors={errors}
              secureTextEntry
              rules={{
                rules: {
                  required: LoginLocales.rules.required.password,
                  minLength: LoginLocales.rules.minLength.password,
                },
              }}
            />
            <TouchableOpacity onPress={onForgotPasswordPressed}>
              <S.ForgotPasswordText title={LoginLocales.forgotPassword} />
            </TouchableOpacity>
          </S.InputContainer>
          <S.SignInButton onPress={handleSubmit(onSignIn)}>
            {/* Aqui poderia ter um componente de customizado de botão,
            pra receber o isLoading e já montar lá dentro, mas estou com pressa.
            Desculpem-me senhores. */}
            {isLoading
              ? <ActivityIndicator color={theme.colors.neutral.white} size="large" />
              : (
                <S.SignInText
                  title={LoginLocales.accessAccount}
                  isBold
                  variant={TEXT_VARIANTS.white}
                />
              )}
          </S.SignInButton>
          <S.SignUpButton onPress={onSignUpPressed}>
            <S.SignUpText title={LoginLocales.createAccount} isBold variant={TEXT_VARIANTS.title} />
          </S.SignUpButton>
        </S.FormContainer>
        <TouchableOpacity onPress={onNeedHelpPressed}>
          <S.NeedHelpText title={LoginLocales.needHelp} variant={TEXT_VARIANTS.title} />
        </TouchableOpacity>
      </S.ContentContainer>
      <S.FooterText title={LoginLocales.footer} variant={TEXT_VARIANTS.title} />
    </S.Container>
  );
}
