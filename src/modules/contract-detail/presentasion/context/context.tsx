import { createContext } from 'react';

type ContractDetailContextValue = {
  pagination: {
    page: number;
    size: number;
    total: number;
  };
  onChangePagination(page: number, size: number): void;
};
const ContractDetailContext = createContext<
  ContractDetailContextValue | null | any
>(null);
export default ContractDetailContext;
