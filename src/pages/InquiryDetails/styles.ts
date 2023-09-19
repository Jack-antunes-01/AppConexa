import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.neutral.white};
  `}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => {
  return {
    size: 'large',
    color: theme.colors.brand.primary,
  };
})``;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${theme.spacing.md}px;
    margin-left: ${theme.spacing.md}px;
    margin-right: ${theme.spacing.md}px;
  `}
`;

export const PatientImage = styled.Image`
  ${({ theme }) => css`
    width: 100%; 
    height: 50%;
    border-radius: ${theme.border.radius.md}px;
    margin-bottom: ${theme.spacing.sm}px;
  `}
`;

export const TitleContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${theme.colors.gray.light};
    margin-bottom: ${theme.spacing.xxxs}px;
    padding-bottom: ${theme.spacing.xxs}px;
  `}
`;

export const DescriptionContainer = styled.ScrollView`
  ${() => css``}
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
