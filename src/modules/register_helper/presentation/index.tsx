import { RegisterHelperProvider } from './context';
import UI from './view';

const RegisterHelperPage = () => {
  return (
    <RegisterHelperProvider>
      <UI />
    </RegisterHelperProvider>
  );
};

export default RegisterHelperPage;
