import styled, { css } from 'styled-components/native';

import moderateScale from '@app/utils/normalize';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.neutral.white};
  `}
`;

export const WelcomeContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.brand.primary};
    border-radius: ${theme.border.radius.md}px;
    padding: ${theme.spacing.xs}px;
    margin-left: ${theme.spacing.md}px;
    margin-right: ${theme.spacing.md}px;
    margin-top: ${theme.spacing.xs}px;
    margin-bottom: ${theme.spacing.xs}px;
    align-items: center;
  `}
`;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    margin-left: ${theme.spacing.md}px;
    margin-right: ${theme.spacing.md}px;
    gap: ${theme.spacing.xs}px;
  `}
`;

export const Separator = styled.View`
  ${() => css`
    height: ${moderateScale(20)}px;
  `}
`;

export const InquiryList = styled.FlatList.attrs(() => {
  return {
    contentContainerStyle: {
      paddingBottom: moderateScale(100),
    },
  };
})`
  ${() => css``}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => {
  return {
    size: 'large',
    color: theme.colors.brand.primary,
  };
})``;
