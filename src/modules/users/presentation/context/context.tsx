import { createContext } from 'react';

type UsersContextValue = {};

const UsersContext = createContext<UsersContextValue | null>(null);

export default UsersContext;
