import { useContext } from 'react';
import ProfileContext from './context';

export const useProfileContext = () => {
  const context = useContext(ProfileContext);

  if (!context) throw new Error('useContext needed ProfileContext!');

  return context;
};
