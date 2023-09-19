import styled, { css } from 'styled-components/native';

import { Text } from '@app/components/Text';

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`  
    border-width: 1px;
    border-radius: ${theme.border.radius.md}px;
    border-color: ${theme.colors.gray.light};
    padding: ${theme.spacing.xs}px;
  `}
`;

export const TitleContainer = styled.View`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.xxxs}px;
    margin-bottom: ${theme.spacing.xxxs}px;
    border-bottom-width: 1px;
    border-color: ${theme.colors.gray.light};
  `}
`;

export const DescriptionText = styled(Text)`
  ${() => css`
    text-align: justify;
  `}
`;

export const DateText = styled(Text)`
  ${() => css`
    align-self: flex-end;
  `}
`;
