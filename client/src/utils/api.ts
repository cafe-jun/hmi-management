// import ERROR_MESSAGES from '../assets/locales/ko.json';

import { utcToDate } from './date';

export const getErrorMessage = (translation, errorCode, data?) => {
  if (errorCode === 'E4096' && data) {
    const { failCount, maxLoginAttempts } = data;
    return (
      translation(`ERROR.${errorCode}`) +
      translation('login-page.loginAttempts', {
        failCount,
        maxLoginAttempts,
      })
    );
  }

  if (errorCode === 'E4122' && data) {
    const unlockTime = utcToDate(data.lockDate, 'YYYY-MM-DD HH:mm:ss');
    return translation(`ERROR.${errorCode}`, { time: unlockTime });
  }

  if (errorCode === 'E4130' && data) {
    const { limit } = data;
    return translation(`ERROR.${errorCode}`, { limit });
  }

  return translation(`ERROR.${errorCode}`) || '알 수 없는 오류가 발생했습니다.';
};
