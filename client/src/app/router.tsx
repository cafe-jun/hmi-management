import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { paths } from '../config/path';
import LoginPage from './routers/auth/login';
import AuthLayout from '@/components/layout/authLayout';

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
      element: <AuthLayout />,
      children: [
        {
          path: paths.auth.login.path,
          element: <LoginPage />,
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
