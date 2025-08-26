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
    hmi: {
      path: '/app/hmi',
      getHref: () => '/app/hmi',
    },
    users: {
      path: '/app/users',
      getHref: () => '/app/users',
    },
    auditLog: {
      path: '/app/auditLog',
      getHref: () => '/app/auditLog',
    },
    setting: {
      path: '/app/setting',
      getHref: () => '/app/setting',
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
