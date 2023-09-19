import axiosClient, { API_ROUTES } from '@app/clients/api';
import { InquiryModel } from '@app/models/inquiry';

export const getInquiry = async (): Promise<InquiryModel[]> => {
  try {
    const { data } = await axiosClient.get<InquiryModel[]>(API_ROUTES.inquiry.list);

    return data;
  } catch (error) {
    // Some error handling
    throw new Error('getInquiry Generic Error');
  }
};
