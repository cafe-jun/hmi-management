import { visualizer } from 'rollup-plugin-visualizer';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }): any => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: { global: 'window' },
    server: {
      host: env.VITE_WEB_SERVER_HOST,
      port: env.VITE_WEB_SERVER_PORT,
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: { plugins: ['@emotion/babel-plugin'] },
      }),
      viteTsconfigPaths(),
      env.ANALYZE === 'true' &&
        visualizer({
          open: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
    ],
    // base: '/auth/register',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['setupTests.js', 'src/testing/mocks/global-mocks.tsx'],
      include: [
        'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', // 모든 테스트 파일 포함
      ],
      exclude: ['node_modules', 'dist', '.git', '.cache'],
    },
    optimizeDeps: {
      exclude: ['fsevents'],
      include: [
        // 자주 사용되는 라이브러리들을 pre-bundle
        'react',
        'react-dom',
        '@mui/material',
        'axios',
        'lodash-es',
      ],
    },
    build: {
      rollupOptions: {
        external: ['fs/promises'],
        output: {
          experimentalMinChunkSize: 3500,
          // 청크 분할 설정 추가
          manualChunks: {
            // React 관련
            'react-vendor': ['react', 'react-dom'],

            // MUI 관련 (가장 큰 청크)
            'mui-core': ['@mui/material', '@emotion/react', '@emotion/styled'],
            'mui-icons': ['@mui/icons-material'],
            'mui-charts': ['@mui/x-charts'],

            // 데이터 그리드
            'ag-grid': ['ag-grid-community', 'ag-grid-react'],

            // 라우팅 관련
            router: ['react-router', 'react-router-dom'],

            // 상태 관리 & 데이터 페칭
            'state-management': ['zustand', '@tanstack/react-query'],

            // 폼 관련
            forms: ['react-hook-form', '@hookform/resolvers', 'zod'],

            // 유틸리티
            utils: ['lodash-es', 'dayjs', 'axios'],

            // UI 라이브러리
            'ui-libs': [
              'react-toastify',
              'react-tooltip',
              'react-day-picker',
              '@toolpad/core',
            ],

            // 국제화
            i18n: ['i18next', 'react-i18next'],

            // 기타
            misc: [
              'papaparse',
              'react-csv',
              'socket.io-client',
              'react-cookie',
              'react-error-boundary',
            ],
          },

          // 청크 파일명 설정 (캐싱 최적화)
          chunkFileNames: (chunkInfo: any) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split('/').pop()
              : 'chunk';
            return `js/${facadeModuleId}-[hash].js`;
          },

          // 엔트리 파일명 설정
          entryFileNames: 'js/[name]-[hash].js',

          // 에셋 파일명 설정
          assetFileNames: (assetInfo: any) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },

      // 빌드 최적화 설정
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 프로덕션에서 console.log 제거
          drop_debugger: true,
        },
      },

      // 청크 크기 경고 임계값 설정
      chunkSizeWarningLimit: 1000,
    },
  };
});
