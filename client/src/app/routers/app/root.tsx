import theme from '@/lib/theme/theme';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

const BRANDING = {
  title: 'HMI 관리 시스템',
  homeUrl: '/app/dashboard',
};

export function ErrorBoundary() {
  return <div>Something went wrong!</div>;
}

function AppRoot() {
  return (
    <ReactRouterAppProvider theme={theme} navigation={} branding={BRANDING}>
      {/* <Outlet /> */}
    </ReactRouterAppProvider>
  );
}

export default AppRoot;
