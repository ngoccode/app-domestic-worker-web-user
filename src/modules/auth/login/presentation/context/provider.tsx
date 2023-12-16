import { ReactNode } from 'react';
import LoginContext from './context';

const LoginProvider = ({ children }: { children: ReactNode }) => {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
