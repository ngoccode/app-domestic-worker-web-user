import { createContext } from 'react';

type WrapperContextValue = {};

const WrapperContext = createContext<WrapperContextValue | null>(null);

export default WrapperContext;
