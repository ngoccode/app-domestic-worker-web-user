import { useContext } from 'react';
import WrapperContext from '.';

export const useWrapperContext = () => {
  const context = useContext(WrapperContext);

  if (!context) throw new Error('useContext needed WrapperContext!');

  return context;
};
