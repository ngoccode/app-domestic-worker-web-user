import { useContext } from 'react';
import RegisterHelperContext from './context';

export const useRegisterHelperContext = () => {
  const context = useContext(RegisterHelperContext);
  if (!context) {
    throw new Error(
      'useRegisterHelperContext must be used within RegisterHelperContextProvider'
    );
  }
  return context;
};
