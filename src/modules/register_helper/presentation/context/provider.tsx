import { ReactNode } from 'react';
import RegisterHelperContext from './context';

const RegisterHelperProvider = ({ children }: { children: ReactNode }) => {
  const value = {};
  return (
    <RegisterHelperContext.Provider value={value}>
      {children}
    </RegisterHelperContext.Provider>
  );
};

export { RegisterHelperProvider };
