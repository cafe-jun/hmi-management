import { css, Global } from '@emotion/react';
import { Box, createTheme, ThemeProvider, useTheme } from '@mui/material';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { Outlet } from 'react-router-dom';

const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;

export const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
`;

export const InnerContainer = css`
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
    width: 100%;
  }
`;

const LeftContainer = ({ theme }: { theme: any }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: ${theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};
  color: ${theme.palette.mode === 'dark' ? '#000000' : '#ffffff'};

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightContainer = ({ theme }: { theme: any }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: ${theme.palette.background.paper};

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    height: inherit;
  }
`;

const FormContainer = css`
  .logo {
    display: block;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    h3 {
      margin: 0px;
    }
  }
  .lang {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  }

  padding: 1.5rem;
  width: 360px;
  border-radius: 8px;
`;

function AuthLayout() {
  const theme = useTheme();
  const buttonColor = theme.palette.mode === 'dark' ? '#ffffff' : '#18181B';
  // 커스텀 테마 생성
  const customTheme = createTheme({
    palette: {},
    typography: {
      fontFamily: 'Inter',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: buttonColor,
            fontFamily: 'Inter',
            fontSize: '0.875rem',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
            fontSize: '0.875rem',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
            fontSize: '0.8rem',
            '& input': {
              fontFamily: 'Inter',
            },
            '& input::placeholder': {
              fontFamily: 'Inter',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
            '& input': {
              fontFamily: 'Inter',
            },
            '& input::placeholder': {
              fontFamily: 'Inter',
              fontSize: '0.8rem',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-input': {},
            '& input::placeholder': {
              fontFamily: 'Inter',
              fontSize: '0.8rem',
            },
          },
        },
      },
    },
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={customTheme}>
        <Box sx={Container}>
          <Box sx={InnerContainer}>
            <Box sx={LeftContainer({ theme })}>
              <VideoLabelIcon style={{ fontSize: 95 }} />
              <h1>{'HMI 관리 시스템'}</h1>
              <h3>v 1.0.0</h3>
            </Box>
            <Box sx={RightContainer({ theme })}>
              <Box sx={FormContainer}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    '& h1': {
                      fontSize: 'clamp(1.5rem, 4vw, 1.5rem)',
                      margin: 0,
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      maxWidth: '100%',
                      padding: '0 1rem',
                    },
                  }}
                ></Box>
                <Outlet />
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default AuthLayout;
