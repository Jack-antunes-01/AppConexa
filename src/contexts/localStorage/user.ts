import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserModel } from '@app/models/user';

const COLLECTIONS = {
  user: 'user',
};

export const storeUser = async (value: UserModel) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(COLLECTIONS.user, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getStoredUser = async (): Promise<UserModel | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(COLLECTIONS.user);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
    // saving error
  }
};
