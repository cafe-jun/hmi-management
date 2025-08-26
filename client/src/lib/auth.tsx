import { configureAuth } from 'react-query-auth';
import { api } from './api';
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router';
import AuthLayoutSkeleton from '@/components/ui/skeleton/authLayoutSkeleton';
import { paths } from '@/config/path';
import { PropsWithChildren, useLayoutEffect } from 'react';
import Loading from '@/components/ui/loading/loading';

export type LoginInput = { userId: string; password: string };

const authConfig = {
  userFn: async () => {
    try {
      const response = await api.get('/api/session');
      return { data: response.data };
    } catch (error) {
      return null;
    }
  },
  loginFn: async (data: LoginInput) => {
    try {
      const res = await login(data);
      return res;
    } catch (error: any) {
      console.error('error:', error.errorCode);
      throw error;
    }
  },
  registerFn: async (data) => {
    const response = await api.post('/api/auth/admin-set', data);
    return response.data;
  },
  logoutFn: async () => {
    await api.post('/api/auth/logout');
  },
};

export const { useUser, useLogin, useRegister, useLogout } =
  configureAuth(authConfig);

const login = (data: LoginInput) => {
  return api.post('/api/auth/login', data);
};

export function AuthGuard({ children }: PropsWithChildren) {
  const location = useLocation();
  if (location.pathname === '/auth/unauthorized') {
    return children;
  }
  const user = useUser();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const redirectTo = searchParams.get('redirectTo');

  const webScadaUrl = searchParams.get('r');

  const isUser = localStorage.getItem('auth-storage');

  const logout = useLogout();

  useLayoutEffect(() => {
    if (user?.data?.data?.dueExpiredPassword) {
      return;
    }
    if (!user.isLoading && user.data && !user?.data?.data?.dueExpiredPassword) {
      navigate(redirectTo ? `${redirectTo}` : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user.isLoading, user.data, navigate, redirectTo]);

  if (user.isLoading) {
    return <AuthLayoutSkeleton />;
  }
  // HMI 관리 시스템 로그인 된 경우의 레이아웃 처리
  if (user.data) {
    if (user.data?.data?.dueExpiredPassword) {
      return children;
    }
    return null;
  }

  // localStorage에 사용자 정보가 남아있으면 삭제
  if (isUser) {
    localStorage.removeItem('auth-storage');

    logout.mutate('');
  }

  return children;
}

export function AppGuard({ children }: PropsWithChildren) {
  const user = useUser();

  if (user.isLoading) {
    return <Loading open={user.isLoading} />;
  }

  if (!user.data) {
    return <Navigate to={paths.auth.login.getHref()} replace />;
  }

  return children;
}

export const getInitialUser = () => {
  try {
    const savedUser = localStorage.getItem('auth-storage');

    if (savedUser) {
      const parsed = JSON.parse(savedUser);

      return parsed.state.user.data;
    }
  } catch (error) {
    return null;
  }
  return null;
};
