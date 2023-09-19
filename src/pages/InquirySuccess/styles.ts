import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.neutral.white};
  `}
`;

export const LottieContainer = styled.View`
  ${() => css`
    flex: 1;
    justify-content: center;
    align-items: center;
  `}
`;

export const ConfirmInquiryButton = styled.Pressable.attrs(({ theme }) => {
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
    margin-top: ${theme.spacing.xs}px;
    margin-bottom: ${theme.spacing.md}px;
    margin-left: ${theme.spacing.md}px;
    margin-right: ${theme.spacing.md}px;
  `}
`;
