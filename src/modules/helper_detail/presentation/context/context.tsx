import { createContext } from 'react';

type HelperDetailContextValue = {};

const HelperDetailContext = createContext<HelperDetailContextValue | null>(
  null
);
export default HelperDetailContext;
