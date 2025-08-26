import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { paths } from '../config/path';
import LoginPage from './routers/auth/loginPage.tsx';
import AuthLayout from '@/components/layout/authLayout';
import { AppGuard, AuthGuard } from '@/lib/auth';
import AppRoot from './routers/app/root';
import DashboardLayout from '@/components/layout/dashboardLayout';
import DashboardPage from './routers/app/dashboardPage.tsx';

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
      children: [
        {
          path: paths.app.dashboard.path,
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
