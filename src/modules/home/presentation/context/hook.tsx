import { useContext } from 'react';
import HomeContext from '.';

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) throw new Error('useContext needed HomeContext!');

  return context;
};
