import { DatabaseServices } from '@app/services';

const useHome = () => {
  const a = 2;

  const onSignIn = async () => {
    try {
      const user = await DatabaseServices.auth.signIn({ email: 'jackson.batista@mblabs.com.br', password: 'teste123' });
      console.log(user);
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
    }
  };

  return { a, onSignIn };
};

export { useHome };
