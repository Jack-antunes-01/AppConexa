import styled, { DefaultTheme, css } from 'styled-components/native';

export const TEXT_VARIANTS = {
  title: 'title',
  text: 'text',
  white: 'white',
} as const;

export type TextVariantTypes = keyof typeof TEXT_VARIANTS;

export type TextProps = {
  variant: TextVariantTypes;
  isBold: boolean;
};

const TextModifier = {
  applyVariant: (theme: DefaultTheme, variant: TextVariantTypes) => {
    if (variant === TEXT_VARIANTS.title) {
      return css`
        color: ${theme.colors.gray.title};
      `;
    }
    if (variant === TEXT_VARIANTS.white) {
      return css`
        color: ${theme.colors.neutral.white};
      `;
    }
    return css`
      color: ${theme.colors.gray.text};
    `;
  },
  applyIsBold: (theme: DefaultTheme, isBold: boolean) => {
    if (isBold) {
      return css`
        font-family: ${theme.font.family.bold};
      `;
    }
    return css`
      font-family: ${theme.font.family.regular};
    `;
  },
};

export const Text = styled.Text<TextProps>`
  ${({ theme, isBold, variant }) => css`
    font-size: ${theme.font.size.xs}px;
    line-height: ${theme.font.lineHeight.xs}px;

    ${TextModifier.applyIsBold(theme, isBold)}
    ${TextModifier.applyVariant(theme, variant)}
  `}
`;
