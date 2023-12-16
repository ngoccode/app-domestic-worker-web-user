import { createContext } from 'react';

type HomeContextValue = {};

const HomeContext = createContext<HomeContextValue | null>(null);

export default HomeContext;
