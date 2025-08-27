import { getErrorMessage } from '@/utils/api';
import { ErrorMessage } from '@/types/enums';
import { Typography } from '@mui/material';
import { paths } from '@/config/path';
import Box from '@mui/material/Box';

const renderBox = (errorMessage: any) => {
  return (
    <Box
      sx={{
        height: '20px',
        visibility: errorMessage ? 'visible' : 'hidden',
      }}
    >
      {errorMessage ? (
        <Typography color="error" variant="caption" sx={{ display: 'block' }}>
          {String(errorMessage)}
        </Typography>
      ) : (
        // 에러가 없을 때도 같은 높이를 유지하기 위한 플레이스홀더
        <span>&nbsp;</span>
      )}
    </Box>
  );
};

export const showLoginError = (errors, login) => {
  // 에러 메시지 선택 (기존 로직)
  let errorMessage = null;

  // 네트워크 에러 판별
  const networkError =
    login.error &&
    (login.error.message === ErrorMessage.NETWORK_ERROR ||
      login.error.code === 'ERR_NETWORK');

  if (errors.userId) {
    // errorMessage = t(errors.userId.message);
  } else if (errors.password) {
    // errorMessage = t(errors.password.message);
  } else if (login.error) {
    const { errorCode, data } = login.error;

    // E4122(계정 잠김) 전용 처리
    if (errorCode === 'E4122' && data) {
      errorMessage = getErrorMessage(errorCode, data);
    }
    // id, pw 검증 오류
    else if (errorCode === 'E4096' && data) {
      errorMessage = getErrorMessage(errorCode, data);
    }
    // // 네트워크 오류 → E1000
    // else if (networkError) {
    //   errorMessage = getErrorMessage('E1000');
    // }
    // // 그 외 일반 오류
    // else {
    //   errorMessage = getErrorMessage(errorCode);
    // }
  }

  return renderBox(errorMessage);
};

export const showFindPwdError = (
  errors,
  resetPasswordMutation,
  nativeErrorMessage?,
) => {
  // 필드 에러 먼저 확인
  let errorMessage = null;

  if (nativeErrorMessage) {
    errorMessage = nativeErrorMessage;
  } else if (errors.answer) {
    errorMessage = errors.answer.message;
  } else if (errors.newPassword) {
    errorMessage = errors.newPassword.message;
  } else if (errors.newPasswordCheck) {
    errorMessage = errors.newPasswordCheck.message;
  } else if (resetPasswordMutation.error) {
    // errorMessage = getErrorMessage(resetPasswordMutation.error.errorCode);
  }

  return renderBox(errorMessage);
};

export const showRegisterError = (errors, register, t) => {
  let errorMessage = null;
  if (errors.newPassword) {
    errorMessage = errors.newPassword.message;
  } else if (errors.newPasswordCheck) {
    errorMessage = errors.newPasswordCheck.message;
  } else if (errors.question) {
    errorMessage = errors.question.message;
  } else if (errors.customQuestion) {
    errorMessage = errors.customQuestion.message;
  } else if (errors.answer) {
    errorMessage = errors.answer.message;
  } else if (register.error) {
    errorMessage = getErrorMessage(t, register.error.errorCode);
  }
  return renderBox(errorMessage);
};

export const showChangePwdError = (errors, changePwd, t) => {
  let errorMessage = null;

  // 필드 에러 먼저 확인
  if (errors.newPassword) {
    errorMessage = errors.newPassword.message;
  } else if (errors.newPasswordConfirm) {
    errorMessage = errors.newPasswordConfirm.message;
  } else if (changePwd?.error) {
    errorMessage = getErrorMessage(
      t,
      changePwd.error.errorCode,
      changePwd.error.data,
    );
  }

  return renderBox(errorMessage);
};

export const navigateByLoginError = (
  setNeedsRegistration,
  errorCode,
  navigate,
  userIdRef?,
) => {
  switch (errorCode) {
    case 'WUS4102': // 계정 미등록
      setNeedsRegistration(true);
      navigate(paths.auth.register.getHref());
      break;
    case 'WUS4129': // CFR PART 11 - 변경주기 -강제변경
      navigate(paths.auth.changePwd.getHref(), {
        state: {
          errorCode,
          userId: userIdRef.current,
        },
        replace: true,
      });

      break;
    default:
  }
};
