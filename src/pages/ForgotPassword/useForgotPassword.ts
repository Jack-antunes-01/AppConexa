import { useNavigation } from '@react-navigation/native';

const useForgotPassword = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return { goBack };
};

export { useForgotPassword };
