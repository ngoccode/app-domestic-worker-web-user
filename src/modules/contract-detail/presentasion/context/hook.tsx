import { useContext } from 'react';
import ContractDetailContext from './context';

export const useContractDetailContext = () => {
  const context = useContext(ContractDetailContext);

  if (!context) throw new Error('useContext needed ContractDetailContext!');

  return context;
};
