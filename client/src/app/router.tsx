import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { ErrorBoundary as AppRootErrorBoundary } from './routers/app/root';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import DashboardLayout from '@/components/layout/dashboardLayout';
import DashboardPage from './routers/app/dashboardPage.tsx';
import HMIManagementPage from './routers/app/hmiPage.tsx';
import AuthLayout from '@/components/layout/authLayout';
import LoginPage from './routers/auth/loginPage.tsx';
import { AppGuard, AuthGuard } from '@/lib/auth';
import AppRoot from './routers/app/root';
import { paths } from '../config/path';
import { useMemo } from 'react';
import AuditLogPage from './routers/app/auditLog.tsx';
import SettingPage from './routers/app/settingPage';
import UserPage from './routers/app/userPage.tsx';

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

function createAppRouter(queryClient: QueryClient) {
  return createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/auth/login" replace />,
    },
    {
      element: (
        <AuthGuard>
          <AuthLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: paths.auth.login.path,
          element: <LoginPage />,
        },
      ],
    },
    {
      element: (
        // <AppGuard>
        <AppRoot />
        // </AppGuard>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.root.path,
          element: <DashboardLayout />,
          children: [
            {
              path: paths.app.dashboard.path,
              lazy: () =>
                import('./routers/app/dashboardPage').then(
                  convert(queryClient),
                ),
              element: <DashboardPage />,
            },
            {
              path: paths.app.hmi.path,
              lazy: () =>
                import('./routers/app/hmiPage.tsx').then(convert(queryClient)),
              element: <HMIManagementPage />,
            },
            {
              path: paths.app.users.path,
              lazy: () =>
                import('./routers/app/userPage.tsx').then(convert(queryClient)),
              element: <UserPage />,
            },

            {
              path: paths.app.auditLog.path,
              lazy: () =>
                import('./routers/app/auditLog.tsx').then(convert(queryClient)),
              element: <AuditLogPage />,
            },

            {
              path: paths.app.setting.path,
              lazy: () =>
                import('./routers/app/settingPage').then(convert(queryClient)),
              element: <SettingPage />,
            },
          ],
        },
      ],
    },
  ]);
}

function AppRouter() {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
