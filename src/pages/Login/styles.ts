import styled, { css } from 'styled-components/native';

import { Text } from '@app/components/Text';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.white};
  `}
`;

export const LogoContainer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    margin-top: ${theme.spacing.xxg}px;
  `}  
`;

export const ContentContainer = styled.View`
  ${() => css`
    flex: 1;
    justify-content: space-evenly;
  `}
`;

export const FormContainer = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.xg}px;
    margin-right: ${theme.spacing.xg}px;
    gap: ${theme.spacing.sm}px;
  `}
`;

export const TitleText = styled(Text)`
  ${() => css`
    align-self: center;
  `}
`;

export const InputContainer = styled.View`
  ${() => css``}
`;

export const ForgotPasswordText = styled(Text)`
  ${({ theme }) => css`
    align-self: flex-end;
    font-size: ${theme.font.size.xxs}px;
  `}
`;

export const SignInButton = styled.Pressable.attrs(({ theme }) => {
  return {
    android_ripple: { color: theme.colors.others.ripple },
  };
})`
  ${({ theme }) => css`
    align-items: center;
    justify-content:center ;
    height: ${theme.size.md}px;
    background-color: ${theme.colors.brand.primary};
    border-radius: ${theme.border.radius.sm}px;
  `}
`;

export const SignInText = styled(Text)`
  ${() => css``}
`;

export const SignUpButton = styled.Pressable.attrs(({ theme }) => {
  return {
    android_ripple: { color: theme.colors.others.ripple },
  };
})`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    height: ${theme.size.md}px;
    background-color: ${theme.colors.neutral.white};
    border-radius: ${theme.border.radius.sm}px;
    border-width: 1px;
    border-color: ${theme.colors.gray.title};
  `}
`;

export const SignUpText = styled(Text)`
  ${() => css``}
`;

export const NeedHelpText = styled(Text)`
  ${() => css`
    align-self: center;
  `}
`;

export const FooterText = styled(Text)`
  ${({ theme }) => css`
    align-self: center;
    margin-bottom: ${theme.spacing.md}px;
  `}
`;
