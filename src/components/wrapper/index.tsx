import React, { memo } from 'react';
import WrapperUI from './View/Wrapper';
import WrapperProvider from './context/provider';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <WrapperProvider>
      <WrapperUI>{children}</WrapperUI>
    </WrapperProvider>
  );
};
export default memo(Wrapper);
