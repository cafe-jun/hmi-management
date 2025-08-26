import {
  Button,
  Typography,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  IconButton,
  Grid2,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import PersonIcon from '@mui/icons-material/Person';
import { showLoginError } from '../error/errors';
import useGlobal from '@/stores/useGlobalStore';
import LockIcon from '@mui/icons-material/Lock';
import { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import { useFormContext } from 'react-hook-form';
import { useLogin } from '@/lib/auth';

function LoginForm({}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const isRememberId = useGlobal((state) => state.isRememberId);

  const setIsRememberId = useGlobal((state) => state.setIsRememberId);

  const [rememberId, setRememberId] = useState(isRememberId);

  const login = useLogin();

  const onClickRememberIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setRememberId(checked);
      if (!checked) {
        setIsRememberId(false);
      }
    },
    [setIsRememberId],
  );

  const getRememberUserId = () => {
    return '';
  };

  return (
    <Box className="logo">
      <LockIcon style={{ fontSize: 60 }} />
      <h3>{'로그인 페이지'}</h3>

      <Grid2 spacing={2}>
        {/* 아이디 입력 영역 */}
        <Grid2>
          <Grid2 size={12} sx={{ textAlign: 'left' }}>
            <Typography>{'사용자 ID'}</Typography>
          </Grid2>
          <Grid2 size={12} mt={1} mb={1}>
            <OutlinedInput
              id="userId"
              fullWidth
              placeholder={'아이디를 입력을 해주세요'}
              size="small"
              {...register('userId')}
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
            />
          </Grid2>
        </Grid2>

        {/* 비밀번호 입력 영역 */}
        <Grid2 spacing={2}>
          <Grid2 sx={{ textAlign: 'left' }}>
            <Typography>{'패스워드'}</Typography>
          </Grid2>
          <Grid2 mt={0.5}>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              placeholder={'패스워드를 입력해주세요'}
              size="small"
              {...register('password')}
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon fontSize="small" />
                    ) : (
                      <VisibilityIcon fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid2>
        </Grid2>

        {/* 비밀번호 찾기 링크와 아이디 기억하기 체크박스 */}
        <Grid2>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={0.8}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberId}
                  onChange={onClickRememberIdChange}
                  size="small"
                  sx={{
                    paddingLeft: 0,
                    color: '#000000',
                    '&.Mui-checked': {
                      color: '#000000',
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2">{'아이디 기억하기'}</Typography>
              }
              sx={{ marginLeft: 0 }}
            />
          </Box>
        </Grid2>

        {/* 로그인 버튼 */}
        <Grid2 mt={2} mb={1}>
          <Button
            loading={login.isPending}
            type="submit"
            variant="contained"
            fullWidth
          >
            {'로그인'}
          </Button>
        </Grid2>
        {/* 에러 메시지 */}
        {errors && (
          <Grid2 style={{ whiteSpace: 'pre-line' }}>
            {showLoginError(errors, login)}
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}

export default LoginForm;
