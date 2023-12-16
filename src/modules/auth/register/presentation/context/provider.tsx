import { ReactNode } from 'react';
import RegisterContext from './context';

const RegisterProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RegisterContext.Provider value={{}}>{children}</RegisterContext.Provider>
  );
};

export default RegisterProvider;
