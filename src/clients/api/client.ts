import axios from 'axios';
import { Platform } from 'react-native';
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
  baseURL: __DEV__ && Platform.OS === 'android' ? Config.API_URL?.replace('desafio.conexasaude.com.br', '54.207.104.91') : Config.API_URL,
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
      Object.assign(requestConfig.headers, { Authorization: `Bearer ${token}` });
    }
    return requestConfig;
  },
);
