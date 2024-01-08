import { useContext } from 'react';
import HelperDetailContext from './context';

export const useHelperDetailContext = () => {
  const context = useContext(HelperDetailContext);

  if (!context)
    throw new Error('useHelperDetailContext need HelperDetailContext');

  return context;
};
