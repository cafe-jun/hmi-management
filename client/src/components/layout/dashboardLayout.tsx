import {
  ThemeSwitcher,
  DashboardLayout as DashboardLayoutStyle,
} from '@toolpad/core/DashboardLayout';
import { BRANDING, getNavigation } from '@/app/routers/app/root';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import LogoutButton from '../auth/logoutButton';

function ToolbarActionsComponent() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {import.meta.env.DEV && <ThemeSwitcher />}
      <LogoutButton />
    </Box>
  );
}

function CustomAppTitle(currentTitle: string) {
  return (
    <Stack
      sx={{ display: 'flex', alignItems: 'center' }}
      direction="row"
      spacing={1}
    >
      <Typography variant="h6">{`${currentTitle} `}</Typography>
    </Stack>
  );
}

const getCurrentTitle = (location) => {
  const path = location.pathname.slice(1);

  const navigation = getNavigation();

  const navItem = [...navigation].find((item: any) =>
    path.includes(item.segment),
  ) as any;

  if (!navItem) return `${BRANDING.title} / 사용자정보`;

  return ` ${BRANDING.title} / ${navItem?.title}`;
};

function DashboardLayout() {
  const location = useLocation();

  return (
    <DashboardLayoutStyle
      slots={{
        appTitle: () => CustomAppTitle(getCurrentTitle(location)),
        toolbarActions: ToolbarActionsComponent,
      }}
    >
      <PageContainer title="" breadcrumbs={[]}>
        <Outlet />
      </PageContainer>
    </DashboardLayoutStyle>
  );
}

export default DashboardLayout;
