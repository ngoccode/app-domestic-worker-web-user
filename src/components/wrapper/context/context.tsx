import { createContext } from 'react';

type WrapperContextValue = {
  onLogout: () => void;
};

const WrapperContext = createContext<WrapperContextValue | null>(null);

export default WrapperContext;
