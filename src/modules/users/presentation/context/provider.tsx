import { ReactNode, useState } from 'react';
import UsersContext from './context';

const UsersProvider = ({ children }: { children: ReactNode }) => {
  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
