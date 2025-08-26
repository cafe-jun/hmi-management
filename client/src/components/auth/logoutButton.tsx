import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import useAuthStore from '@/stores/useAuthStore';
import { useLogout, useUser } from '@/lib/auth';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import Menu from '@mui/material/Menu';
import ToastMsg from '@/lib/toast';

function LogoutButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const user = useUser();

  const { userId } = { userId: 'admin' };
  //user.data?.data;

  const queryClient = useQueryClient();

  const logout = useLogout({
    onSuccess: () => {
      navigate('/auth/login');

      setUser(null);

      localStorage.removeItem('auth-storage');

      // React Query 캐시 클리어 - User 관련 데이터 삭제
      queryClient.clear();

      ToastMsg.logout();
    },
  });

  const openMenu = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const onClickLogout = useCallback(
    (text) => {
      if (text === '로그아웃') {
        logout.mutate(null);
      }
      closeMenu();
    },
    [closeMenu, logout],
  );

  //사용자정보화면으로이동
  const onClickAccount = useCallback(() => {
    navigate('/app/account');
    closeMenu();
  }, []);

  return (
    <>
      <Tooltip title={'계정'}>
        <IconButton>
          <AccountCircleIcon onClick={openMenu} />
        </IconButton>
      </Tooltip>
      <Menu
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        anchorEl={anchorEl}
      >
        {userId === 'admin' && (
          <MenuItem onClick={() => onClickAccount()} key="사용자정보">
            {'사용자정보'}
          </MenuItem>
        )}
        <MenuItem onClick={() => onClickLogout('로그아웃')} key="로그아웃">
          {'로그아웃'}
        </MenuItem>
      </Menu>
    </>
  );
}

export default memo(LogoutButton);
