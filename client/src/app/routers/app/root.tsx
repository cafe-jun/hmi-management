import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Navigation } from 'node_modules/@toolpad/core/esm/AppProvider/AppProvider';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import appTheme from '@/lib/theme/theme';

export const getNavigation = (): Navigation => [
  {
    title: 'HMI 관리',
    segment: 'app/hmi',
    icon: <DeviceHubIcon style={{ width: '30px', height: '30px' }} />,
  },
];

const BRANDING = {
  title: 'HMI 관리 시스템',
  homeUrl: '/app/dashboard',
};

export function ErrorBoundary() {
  return <div>Something went wrong!</div>;
}

function AppRoot() {
  const navigation = getNavigation();

  return (
    <ReactRouterAppProvider
      theme={appTheme}
      navigation={navigation}
      branding={BRANDING}
      children
    >
      {/* <Outlet /> */}
    </ReactRouterAppProvider>
  );
}

export default AppRoot;
