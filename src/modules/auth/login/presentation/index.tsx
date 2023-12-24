import Wrapper from 'components/wrapper/View/Wrapper';
import LoginProvider from './context/provider';
import UI from './views';

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginProvider>
        <UI />
      </LoginProvider>
    </Wrapper>
  );
};
export default LoginPage;
