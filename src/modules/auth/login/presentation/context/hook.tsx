import { useContext } from 'react';
import LoginContext from '.';

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) throw new Error('useContext needed LoginContext!');

  return context;
};
