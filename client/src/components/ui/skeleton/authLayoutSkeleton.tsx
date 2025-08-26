import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
`;

const innerContainerStyle = css`
  display: flex;
  width: 900px;
  height: 700px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 90%;
    margin: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const RightContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    display: block;
    /* padding-bottom: 2rem; */
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    h3 {
      margin: 0px;
    }
  }
  .label {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  padding: 1.5rem;
  width: 360px;
  border-radius: 8px;
  .input {
  }
`;

function AuthLayoutSkeleton() {
  return (
    <Box sx={containerStyle}>
      <Box sx={innerContainerStyle}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={450}
          height={700}
        />
        <Box sx={RightContainerStyle}>
          <Box className="logo">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={50}
              height={50}
            />
            <Skeleton variant="text" animation="wave" width={50} height={50} />
          </Box>
          <Box className="label" mb={2}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={50}
              height={20}
            />
          </Box>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={350}
            height={40}
          />
          <Box className="label" mt={2} mb={2}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={50}
              height={20}
            />
          </Box>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={350}
            height={40}
          />
          <Box mt={5}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={40}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthLayoutSkeleton;
