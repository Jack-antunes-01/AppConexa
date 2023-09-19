const Auth = {
  login: '/login',
} as const;

const Inquiry = {
  list: '/consultas',
} as const;

export const API_ROUTES = {
  auth: Auth,
  inquiry: Inquiry,
};
