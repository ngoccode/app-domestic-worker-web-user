import { createContext } from 'react';

type RegisterContextValue = {};

const RegisterContext = createContext<RegisterContextValue | null>(null);

export default RegisterContext;
