import { Navigation } from 'node_modules/@toolpad/core/esm/AppProvider/AppProvider';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import DescriptionIcon from '@mui/icons-material/Description';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router-dom';
import appTheme from '@/lib/theme/theme';

export const getNavigation = (): Navigation => [
  {
    title: 'Dashboard',
    segment: 'app/dashboard',
    icon: <DashboardIcon style={{ width: '30px', height: '30px' }} />,
  },
  {
    title: 'HMI 관리',
    segment: 'app/hmi',
    icon: <DeviceHubIcon style={{ width: '30px', height: '30px' }} />,
  },
  {
    title: '사용자 관리',
    segment: 'app/users',
    icon: <PersonIcon style={{ width: '30px', height: '30px' }} />,
  },
  {
    title: '감사 로그',
    segment: 'app/auditLog',
    icon: <DescriptionIcon style={{ width: '30px', height: '30px' }} />,
  },
  {
    title: '설정',
    segment: 'app/setting',
    icon: <SettingsIcon style={{ width: '30px', height: '30px' }} />,
  },
];

export const BRANDING = {
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
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}

export default AppRoot;
