import { useContext } from 'react';
import ContractContext from './context';

export const useContractContext = () => {
  const context = useContext(ContractContext);

  if (!context) throw new Error('useContractContext need ContractContext');

  return context;
};
