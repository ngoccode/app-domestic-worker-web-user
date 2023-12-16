import { useContext } from 'react';
import UsersContext from '.';

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!context) throw new Error('useContext needed UsersContext!');

  return context;
};
