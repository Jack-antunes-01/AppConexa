import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Alert } from 'react-native';

const useHeader = () => {
  const navigation = useNavigation();

  const onDrawerPressed = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const onUserPressed = () => {
    Alert.alert('Pega leve man, o tempo é curto');
  };

  const onGoBackPressed = () => {
    navigation.goBack();
  };

  return { onUserPressed, onDrawerPressed, onGoBackPressed };
};

export { useHeader };
