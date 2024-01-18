import { createContext } from 'react';

type RegisterHelperContextValue = any;
const RegisterHelperContext = createContext<RegisterHelperContextValue | null>(
  null
);
export default RegisterHelperContext;
