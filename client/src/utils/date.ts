import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
// TODO: 추후 타입존 Params 입력 받아서 변경
dayjs.tz.setDefault('Asia/Seoul');

export const utcToDate = (value, format) => {
  // 유효한 날짜인지 확인
  if (!value || !dayjs(value).isValid()) {
    console.warn('Invalid date, using current UTC time');
    return dayjs(value), format(format); // 유효하지 않으면 현재 UTC 시간 반환
  }
  return dayjs.unix(value).format(format);
};

export const dateToUtc = (value: string) => {
  return dayjs.utc(value).unix();
};

export const searchFilterRangeDate = (): {
  startDate: string;
  endDate: string;
} => {
  const startDate = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
  const endDate = dayjs().format('YYYY-MM-DD');
  return { startDate, endDate };
};

export const getTodayFormat = (format: string) => {
  return dayjs().format(format);
};
/**
 * milliseconds를 포함하지 않은 unix epoch time
 * @returns
 */
export const getTodayUtc = (): number => {
  return dayjs().unix();
};
