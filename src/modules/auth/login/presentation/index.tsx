import LoginProvider from './context/provider';
import UI from './views';

const LoginPage = () => {
  return (
    <LoginProvider>
      <UI />
    </LoginProvider>
  );
};
export default LoginPage;
