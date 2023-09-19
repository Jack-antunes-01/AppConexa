import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { HomeStackParamList } from '@app/routes/stacks/home.routes';

const useInquiryDetails = () => {
  const route = useRoute<RouteProp<HomeStackParamList>>();
  const inquiry = route.params?.inquiry;

  const [patientImage, setPatientImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  return { inquiry, patientImage, isLoading };
};

export { useInquiryDetails };
