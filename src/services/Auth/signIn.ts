import axiosClient, { API_ROUTES } from '@app/clients/api';
import { LocalStorage } from '@app/contexts/localStorage';
import { AuthModel } from '@app/models/auth';
import { UserModel } from '@app/models/user';

type SignInProps = {
  email: string;
  password: string;
};

export const signIn = async ({
  email,
  password,
}: SignInProps): Promise<UserModel> => {
  try {
    const { data } = await axiosClient.post<AuthModel>(API_ROUTES.auth.login, {
      email,
      senha: password,
    });

    const user: UserModel = {
      email: data.email,
      nome: data.nome,
    };

    await LocalStorage.user.storeUser(user);
    await LocalStorage.auth.storeToken(data.token);

    return user;
  } catch (error) {
    // Some error handling
    throw new Error('SignIn Generic Error');
  }
};
