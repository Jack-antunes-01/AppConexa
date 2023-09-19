import AsyncStorage from '@react-native-async-storage/async-storage';

const COLLECTIONS = {
  token: 'token',
};

export const storeToken = async (token: string) => {
  try {
    const jsonValue = JSON.stringify(token);
    await AsyncStorage.setItem(COLLECTIONS.token, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getStoredToken = async (): Promise<string | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(COLLECTIONS.token);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
    // saving error
  }
};
