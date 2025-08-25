import { css, Global } from '@emotion/react';
import { Box, createTheme, ThemeProvider, useTheme } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            minHeight: '100vh',
            overflow: 'hidden',
            background: '#f5f5f5',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              width: '900px',
              height: '700px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SecurityIcon style={{ fontSize: 80 }} />
              <h1>{'HMI 관리 시스템'}</h1>
              <h3>v 1.0.0</h3>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                width: '100%',
                background: `${theme.palette.background.paper}`,
              }}
            >
              <Box>
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
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default AuthLayout;
