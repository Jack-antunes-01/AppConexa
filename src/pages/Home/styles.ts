import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const LogoContainer = styled.View`
${({ theme }) => css`
  margin-top: ${theme.spacing.xxg}px;
  align-items: center;
`}
`;

export const FormContainer = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;

export const TitleText = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;

export const ForgotPasswordText = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;

export const SignInButton = styled.Pressable`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;

export const SignUpButton = styled.Pressable`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;

export const NeedHelpText = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;

export const FooterText = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxg}px;
    align-items: center;
  `}
`;
