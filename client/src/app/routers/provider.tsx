import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState, type PropsWithChildren } from 'react';
import { queryConfig } from '../../lib/react-query';

export function AppProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig }),
  );

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          ...loading
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </React.Suspense>
  );
}
