import { FormInstance } from 'antd';
import { createContext } from 'react';

type LoginContextValue = {
  form: FormInstance;
  onConfirmLogin(value: { phoneNumber: string; password: string }): void;
};

const LoginContext = createContext<LoginContextValue | null>(null);

export default LoginContext;
