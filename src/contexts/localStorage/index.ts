import { getStoredToken, storeToken } from './auth';
import { getStoredUser, storeUser } from './user';

export const LocalStorage = {
  user: {
    storeUser,
    getStoredUser,
  },
  auth: {
    storeToken,
    getStoredToken,
  },
};
