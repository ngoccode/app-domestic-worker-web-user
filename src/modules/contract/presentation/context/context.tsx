import { createContext } from 'react';

type ContractContextValue = any;

const ContractContext = createContext<ContractContextValue | null>(null);
export default ContractContext;
