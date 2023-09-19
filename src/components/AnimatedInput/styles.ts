import {
  Animated, Pressable, Text, TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { css } from 'styled-components/native';

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

export const Touchable = styled(AnimatedTouchable)`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.neutral.white};
    padding-left: ${theme.spacing.xxs}px;
    padding-right: ${theme.spacing.xxs}px;
    z-index: 2;
  `}
`;

export const Placeholder = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.font.size.xs}px;
    line-height: ${theme.font.lineHeight.xs}px;
    font-family: ${theme.font.family.regular};
  `}
`;

type InputContainerProps = {
  borderColor?: string;
  hasError?: boolean;
};

export const InputContainer = styled.View<InputContainerProps>`
  ${({ theme, borderColor, hasError }) => css`
    flex-direction: row;
    align-items: center;
    border-width: 1px;
    border-color: ${hasError ? theme.colors.others.red : borderColor || theme.colors.neutral.white};
    border-radius: ${theme.border.radius.sm}px;
    background-color: ${theme.colors.neutral.white};
  `}
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xs}px;
    line-height: ${theme.font.lineHeight.xs}px;
    color: ${theme.colors.gray.title};
    padding-left: ${theme.spacing.sm}px;
    padding-right: ${theme.spacing.sm}px;
    flex: 1;
  `}
`;

export const IconContainer = styled.Pressable`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.neutral.white};
    height: ${theme.size.md}px;
    padding-left: ${theme.spacing.xxs}px;
    padding-right: ${theme.spacing.xxs}px;
    border-radius: ${theme.border.radius.sm}px;
  `}
`;

export const MaterialCommunityIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => {
  return {
    size: theme.icon.size.sm,
    color: theme.colors.gray.light,
  };
})`
  ${() => css``}
`;

export const Row = styled.View`
  ${() => css`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const CounterText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.font.size.xxs}px;
    line-height: ${theme.font.lineHeight.xxs}px;
    font-family: ${theme.font.family.regular};
    align-self: flex-end;
  `}
`;

export const ErrorText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.others.red};
    font-size: ${theme.font.size.xxs}px;
    line-height: ${theme.font.lineHeight.xxs}px;
    font-family: ${theme.font.family.regular};
    align-self: flex-end;
  `}
`;
