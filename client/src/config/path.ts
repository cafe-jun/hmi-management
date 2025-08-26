export const paths = {
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/app/dashboard',
      getHref: () => '/app/dashboard',
    },
  },
  auth: {
    root: {
      path: '/auth',
      getHref: () => '/auth',
    },
    login: {
      path: '/auth/login',
      getHref: () => '/auth/login',
    },
    changePwd: {
      path: '/auth/change-password',
      getHref: () => '/auth/change-password',
    },
    register: {
      path: '/auth/register',
      getHref: () => '/auth/register',
    },
  },
};
