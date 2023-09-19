import { useNavigation } from '@react-navigation/native';

const useNeedHelp = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return { goBack };
};

export { useNeedHelp };
