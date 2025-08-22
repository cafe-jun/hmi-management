import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { paths } from '../config/path';

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
        <div>
          <div>test</div>
        </div>
      ),
      children: [
        {
          path: paths.auth.login.path,
          element: (
            <div>
              <div>test</div>
            </div>
          ),
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
