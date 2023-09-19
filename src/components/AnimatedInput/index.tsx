import React, { useEffect, useRef } from 'react';
import { Controller, Control, UseControllerProps } from 'react-hook-form';
import {
  Animated, TextInput, TextInputProps, View,
} from 'react-native';

import * as S from './styles';

type InputProps = {
  name: string;
  control: Control<any>;
  rules?: Pick<UseControllerProps, 'rules'>;
  errors?: any;

  label: string;
  icon?: string;
  borderColor?: string;

  useCounter?: boolean;
} & TextInputProps;

function AnimatedInput({
  name,
  control,
  label,
  icon,
  borderColor,
  useCounter = false,
  maxLength,
  rules,
  errors,
  ...args
}: InputProps) {
  // eslint-disable-next-line no-prototype-builtins
  const hasError = !!errors && typeof errors === 'object' && errors.hasOwnProperty(name) && errors[name]?.message;
  console.log('🚀 ~ file: index.tsx:36 ~ hasError: ', JSON.stringify(hasError, null, 4), '');

  const inputRef = useRef<TextInput>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (inputRef.current?.isFocused()) animatedValue.setValue(1);
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 8],
    extrapolate: 'clamp',
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [14, -12],
    extrapolate: 'clamp',
  });

  const endAnimation = (text: string) => {
    if (!text.length) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleFocus = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Controller
      name={name}
      rules={rules?.rules}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        if (value) startAnimation();
        return (
          <>
            <S.Touchable
              onPress={handleFocus}
              style={{
                transform: [{ translateY }, { translateX }],
              }}
            >
              <S.Placeholder>{label}</S.Placeholder>
            </S.Touchable>
            <S.InputContainer borderColor={borderColor} hasError={hasError}>
              <S.Input
                ref={inputRef}
                onFocus={startAnimation}
                onBlur={() => {
                  onBlur();
                  endAnimation(value);
                }}
                value={value}
                onChangeText={onChange}
                {...args}
              />
              {icon && (
                <S.IconContainer onPress={() => { }}>
                  <S.MaterialCommunityIcon name={icon} />
                </S.IconContainer>
              )}
            </S.InputContainer>
            <S.Row>
              {hasError ? <S.ErrorText>{errors[name]?.message}</S.ErrorText> : <View />}
              {useCounter && <S.CounterText>{`${value.length}/${maxLength}`}</S.CounterText>}
            </S.Row>
          </>
        );
      }}
    />
  );
}

export { AnimatedInput };
