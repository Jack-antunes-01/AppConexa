import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { Routes } from '@app/routes/routes';
import { HomeStackParamList } from '@app/routes/stacks/home.routes';

const useInquiryDetails = () => {
  const navigation = useNavigation();

  const route = useRoute<RouteProp<HomeStackParamList>>();
  const inquiry = route.params?.inquiry;

  const [patientImage, setPatientImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  useEffect(() => {
    const getPatientImage = async () => {
      setIsLoading(true);
      fetch('https://dog.ceo/api/breeds/image/random').then(async (res) => {
        const response = await res.json();
        setPatientImage(response.message);
      }).catch().finally(() => {
        setIsLoading(false);
      });
    };

    getPatientImage();
  }, []);

  const onConfirmInquiryPressed = () => {
    setIsLoadingButton(true);
    setTimeout(() => {
      navigation.navigate(Routes.InquirySuccess);
      setIsLoadingButton(false);
    }, 2000);
  };

  return {
    inquiry, patientImage, isLoading, onConfirmInquiryPressed, isLoadingButton,
  };
};

export { useInquiryDetails };
