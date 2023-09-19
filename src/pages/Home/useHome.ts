import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { useInquiryContext } from '@app/contexts/inquiryContext';
import { useUserContext } from '@app/contexts/userContext';
import { AppServices } from '@app/services/index';

const useHome = () => {
  const navigation = useNavigation();
  const { user } = useUserContext();
  const { inquiryList, setInquiryList } = useInquiryContext();

  useEffect(() => {
    const fetchInquiry = async () => {
      const inquiries = await AppServices.inquiry.getInquiry();
      setInquiryList(inquiries);
    };

    fetchInquiry();
  }, [setInquiryList]);

  return { user, inquiryList };
};

export { useHome };
