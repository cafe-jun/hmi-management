import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { Form } from '../ui/Form';

function LoginForm({}) {
  const handleSubmit = (data: any) => {
    console.log('폼 데이터:', data);
  };
  return (
    <Box className="logo">
      <LockIcon style={{ fontSize: 60 }} />
      <h3>{'로그인 페이지'}</h3>
      <Form onSubmit={handleSubmit}>
        <></>
      </Form>
    </Box>
  );
}

export default LoginForm;
