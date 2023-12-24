import { ReactNode } from 'react';
import WrapperContext from './context';

const WrapperProvider = ({ children }: { children: ReactNode }) => {
  const valueProvider = {};
  return (
    <WrapperContext.Provider value={valueProvider}>
      {children}
    </WrapperContext.Provider>
  );
};

export default WrapperProvider;
