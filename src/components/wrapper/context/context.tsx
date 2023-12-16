import { createContext } from 'react';

type WrapperContextValue = {
  menuKey: string;
  onChangeMenu: (menu: string) => void;
};

const WrapperContext = createContext<WrapperContextValue | null>(null);

export default WrapperContext;
