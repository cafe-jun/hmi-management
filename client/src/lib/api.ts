import Axios, { InternalAxiosRequestConfig } from 'axios';

let isApiInitialized = false;
let initializationPromise: Promise<void> | null = null;
function requestInterceptor(config: InternalAxiosRequestConfig) {
  const isLogin = config.url?.includes('/api/auth/login');
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  if (
    config.data &&
    !isLogin &&
    ['post', 'put', 'patch'].includes(config.method?.toLowerCase() || '')
  ) {
    config.data = transformRequest(config.data);
  }

  config.withCredentials = true;
  return config;
}

/**
 * @param data
 * @returns
 * @description
 */
export function transformResponse(data: any, config?: any) {
  let result;
  if (data) {
    return result;
  }
  return data;
}

/**
 * @description
 * API 요청시 암호화여부에 따라 데이터를 암호화해서 보낼지 여부를 결정합니다.
 */
export function transformRequest(data: any) {
  return data;
}

/**
 * @ description
 * API 초기화 함수
 */
export async function initializeAPI() {
  // 이미 초기화가 완료되었으면 즉시 반환
  if (isApiInitialized) return;

  // 이미 초기화 중이면 해당 Promise를 반환하여 중복 실행 방지
  if (initializationPromise) return initializationPromise;

  initializationPromise = (async () => {
    try {
      isApiInitialized = true;
    } catch (error) {
      isApiInitialized = true;
    } finally {
      initializationPromise = null; // Promise 참조 정리
    }
  })();

  return initializationPromise;
}
const baseURL =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? `http://${import.meta.env.VITE_API_SERVER_HOST}:${import.meta.env.VITE_API_SERVER_PORT}`
    : '';

export const api = Axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
api.interceptors.request.use(async (config) => {
  return requestInterceptor(config);
});

api.interceptors.response.use(
  (response) => {
    if (response.data.errorCode === 'E4125') {
      window.location.href = '/auth/unauthorized';
      return;
    }
    const transformedData = transformResponse(response.data, response.config);
    response.data = transformedData;

    if (response.data && response.data.errorCode) {
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      //   const redirectTo =
      //     searchParams.get('redirectTo') || window.location.pathname;
      //   window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);
