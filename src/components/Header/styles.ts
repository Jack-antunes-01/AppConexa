import styled, { css } from 'styled-components/native';

import { MaterialCommunityIcon } from '@app/components/AnimatedInput/styles';
import moderateScale from '@app/utils/normalize';

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    height:${moderateScale(56)}px;
    padding: ${theme.spacing.xs}px;
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.gray.light};
  `}
`;

export const MenuIcon = styled(MaterialCommunityIcon).attrs(({ theme }) => {
  return {
    name: 'menu',
    size: moderateScale(32),
    color: theme.colors.brand.primary,
  };
})`
  ${() => css``}
`;
