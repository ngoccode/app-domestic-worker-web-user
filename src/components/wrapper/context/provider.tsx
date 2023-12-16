import { ReactNode, useState } from 'react';
import WrapperContext from './context';

const WrapperProvider = ({ children }: { children: ReactNode }) => {
  const [menuKey, setMenuKey] = useState('empty');

  const valueProvider = {
    menuKey,
    onChangeMenu: setMenuKey,
  };
  return (
    <WrapperContext.Provider value={valueProvider}>
      {children}
    </WrapperContext.Provider>
  );
};

export default WrapperProvider;
