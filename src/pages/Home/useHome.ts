import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';

import { useInquiryContext } from '@app/contexts/inquiryContext';
import { useUserContext } from '@app/contexts/userContext';
import { InquiryModel } from '@app/models/inquiry';
import { Routes } from '@app/routes/routes';
import { AppServices } from '@app/services/index';

const useHome = () => {
  const navigation = useNavigation();
  const { user } = useUserContext();
  const { inquiryList, setInquiryList } = useInquiryContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        setIsLoading(true);
        const inquiries = await AppServices.inquiry.getInquiry();
        setInquiryList(inquiries);
      } catch (error) {
        const err = error as Error;
        // Handle error (UI) - Custom Toast, modal or alert
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiry();
  }, [setInquiryList]);

  const onInquiryPressed = (inquiry: InquiryModel) => {
    // Configuro o service ao vivo se necessário api/consultas/${inquiry.id}
    // Apesar que o retorno será o mesmo que o inquiry que estou recebendo via props
    // Mas em uma situação real, sim, realmente precisaria chamar o endpoint.
    navigation.navigate(Routes.InquiryDetails, { inquiry });
  };

  return {
    user, isLoading, inquiryList, onInquiryPressed,
  };
};

export { useHome };
