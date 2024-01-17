import { ReactNode, useState } from 'react';
import HelperListContext from './context';

const DEFAULT_VALUE = {
  pagination: {
    page: 1,
    size: 10,
    total: 100,
  },
};

const HelperListProvider = ({ children }: { children: ReactNode }) => {
  const [pagination, setPagination] = useState(DEFAULT_VALUE.pagination);

  const onChangePagination = (page: number, size: number) => {
    setPagination((current) => ({ ...current, page, size }));
  };

  const value = {
    pagination,
    onChangePagination,
  };
  return (
    <HelperListContext.Provider value={value}>
      {children}
    </HelperListContext.Provider>
  );
};

export default HelperListProvider;
