import { useNavigation } from '@react-navigation/native';

import { Routes } from '@app/routes/routes';

const useInquirySuccess = () => {
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate(Routes.HomePage);
  };

  return { onConfirmPressed };
};

export { useInquirySuccess };
