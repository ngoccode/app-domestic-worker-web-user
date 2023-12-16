import { createContext } from 'react';

type LoginContextValue = {};

const LoginContext = createContext<LoginContextValue | null>(null);

export default LoginContext;
