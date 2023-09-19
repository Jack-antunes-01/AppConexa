import { UserModel } from './user';

export type AuthModel = UserModel & {
  token: string;
};
