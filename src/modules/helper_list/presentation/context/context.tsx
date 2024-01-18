import { createContext } from 'react';

type HelperListContextValue = {
  pagination: {
    page: number;
    size: number;
    total: number;
  };
  onChangePagination(page: number, size: number): void;
};
const HelperListContext = createContext<HelperListContextValue | null | any>(
  null
);
export default HelperListContext;
