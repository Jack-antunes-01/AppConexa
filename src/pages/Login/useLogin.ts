import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastAndroid } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useUserContext } from '@app/contexts/userContext';
import { Routes } from '@app/routes/routes';
import { AppServices } from '@app/services';

type FormData = {
  email: string;
  password: string;
};

const useLogin = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const { setUser } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const validateEmail = (email: string) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(email)) {
      return true;
    }
    return false;
  };

  const onSignIn = async (data: FormData) => {
    const isValid = validateEmail(data.email);
    if (!isValid) {
      setError('email', { message: 'Email inválido' });
      return;
    }

    try {
      setIsLoading(true);
      const user = await AppServices.auth.signIn({ email: data.email, password: data.password });
      setUser(user);
    } catch (error) {
      const err = error as Error;
      // Handle error (UI) - Custom Toast, modal or alert
      ToastAndroid.show(err.message, ToastAndroid.LONG);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignUpPressed = () => {
    navigation.navigate(Routes.SignUp);
  };

  const onNeedHelpPressed = () => {
    navigation.navigate(Routes.NeedHelp);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate(Routes.ForgotPassword);
  };

  return {
    theme,
    errors,
    control,
    isLoading,
    onSignIn,
    handleSubmit,
    onSignUpPressed,
    onNeedHelpPressed,
    onForgotPasswordPressed,
  };
};

export { useLogin };
