import React from 'react';

import * as S from './styles';

export type TextProps = {
  title: string;
  variant?: S.TextVariantTypes;
  isBold?: boolean;
};

export function Text({
  title,
  isBold = false,
  variant = S.TEXT_VARIANTS.text,
  ...args
}: TextProps) {
  return <S.Text isBold={isBold} variant={variant} {...args}>{title}</S.Text>;
}

export { TEXT_VARIANTS } from './styles';
