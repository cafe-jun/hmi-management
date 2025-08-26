import { Box, Skeleton } from '@mui/material';
import { css } from '@emotion/react';

const Container = css`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Sidebar = css`
  width: 240px;
  border-right: 1px solid #e0e0e0;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Content = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = css`
  height: 64px;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainContent = css`
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
`;

const NavItem = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

function DashboardLayoutSkeleton() {
  return (
    <Box sx={Container}>
      {/* Sidebar 스켈레톤 */}
      <Box sx={Sidebar}>
        <Box sx={{ mb: 3 }}>
          <Skeleton variant="rectangular" width={180} height={40} />
        </Box>

        {/* 네비게이션 아이템 스켈레톤 */}
        {[1, 2, 3, 4].map((item) => (
          <Box sx={NavItem} key={item}>
            <Skeleton
              variant="circular"
              width={24}
              height={24}
              sx={{ mr: 2 }}
            />
            <Skeleton variant="text" width={150} height={24} />
          </Box>
        ))}
      </Box>

      {/* 메인 콘텐츠 영역 스켈레톤 */}
      <Box sx={Content}>
        {/* 헤더 스켈레톤 */}
        <Box sx={Header}>
          <Skeleton variant="text" width={200} height={32} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton variant="text" width={100} height={32} sx={{ mr: 2 }} />
            <Skeleton variant="circular" width={40} height={40} />
          </Box>
        </Box>

        {/* 메인 콘텐츠 스켈레톤 */}
        <Box sx={MainContent}>
          {/* 제목 영역 */}
          <Skeleton variant="text" width={300} height={40} sx={{ mb: 3 }} />

          {/* 카드 콘텐츠 영역 */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 3,
            }}
          >
            {[1, 2, 3, 4].map((card) => (
              <Box
                key={card}
                sx={{ bgcolor: 'white', p: 3, borderRadius: 1, boxShadow: 1 }}
              >
                <Skeleton
                  variant="text"
                  width="60%"
                  height={32}
                  sx={{ mb: 2 }}
                />
                <Skeleton variant="rectangular" width="100%" height={120} />
                <Box sx={{ mt: 2 }}>
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="80%" />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayoutSkeleton;
