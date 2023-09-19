export const LoginLocales = {
  title: 'Acesse sua conta',
  forgotPassword: 'Esqueceu sua senha?',
  accessAccount: 'Acessar conta',
  createAccount: 'Criar conta',
  needHelp: 'Precisa de ajuda?',
  footer: 'Conexa Saúde | Conexa | Versão: 1.0',

  inputs: {
    email: 'Email',
    password: 'Senha',
  },

  rules: {
    required: {
      email: 'Digite seu email',
      password: 'Digita sua senha',
    },
    minLength: {
      password: {
        value: 6,
        message: 'Mínimo 6 caracteres',
      },
    },
  },
};
