import axios from 'axios';
import Config from 'react-native-config';

import { LocalStorage } from '@app/contexts/localStorage';

type AxiosError = {
  response: AxiosErrorResponse;
};

export type AxiosErrorResponse = {
  data: {
    message: string,
    statusCode: number,
    timestamp: Date,
    path: string,
  },
  status: number,
};

export const axiosClient = axios.create({
  baseURL: Config.API_URL,
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  // Error handling (not implemented)
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosClient.interceptors.request.use(
  async (requestConfig) => {
    const token = await LocalStorage.auth.getStoredToken();
    if (token) {
      Object.assign(requestConfig.headers, { Authorization: token });
    }
    return requestConfig;
  },
);
