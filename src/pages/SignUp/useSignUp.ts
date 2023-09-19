import { useNavigation } from '@react-navigation/native';

const useSignUp = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return { goBack };
};

export { useSignUp };
