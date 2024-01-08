import { ReactNode } from 'react';
import HelperDetailContext from './context';

const HelperDetailProvider = ({ children }: { children: ReactNode }) => {
  const value = {};
  return (
    <HelperDetailContext.Provider value={value}>
      {children}
    </HelperDetailContext.Provider>
  );
};

export default HelperDetailProvider;
