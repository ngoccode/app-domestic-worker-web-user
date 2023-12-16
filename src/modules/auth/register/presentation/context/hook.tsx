import { useContext } from 'react';
import RegisterContext from '.';

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  if (!context) throw new Error('useContext needed RegisterContext!');

  return context;
};
