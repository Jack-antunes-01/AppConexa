import { signIn } from './Auth/signIn';
import { getInquiry } from './Inquiry/getInquiry';

export const AppServices = {
  auth: {
    signIn,
  },
  inquiry: {
    getInquiry,
  },
};
