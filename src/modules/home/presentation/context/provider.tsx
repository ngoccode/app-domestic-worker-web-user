import { ReactNode, useState } from 'react';
import HomeContext from './context';

const HomeProvider = ({ children }: { children: ReactNode }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
