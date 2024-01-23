import { createContext } from 'react';

type HelperDetailContextValue = any;

const HelperDetailContext = createContext<HelperDetailContextValue | null>(
  null
);
export default HelperDetailContext;
