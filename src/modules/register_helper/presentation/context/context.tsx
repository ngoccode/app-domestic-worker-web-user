import { createContext } from 'react';

type RegisterHelperContextValue = {};
const RegisterHelperContext = createContext<RegisterHelperContextValue | null>(
  null
);
export default RegisterHelperContext;
