import RegisterProvider from './context/provider';
import UI from './views';

const RegisterPage = () => {
  return (
    <RegisterProvider>
      <UI />
    </RegisterProvider>
  );
};
export default RegisterPage;
