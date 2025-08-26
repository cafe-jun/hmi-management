import LoginForm from '@/components/auth/loginForm';
import { Form } from '@/components/ui/Form';

function LoginPage() {
  const onSubmit = () => {};
  return (
    <Form onSubmit={onSubmit}>
      <LoginForm />
    </Form>
  );
}

export default LoginPage;
