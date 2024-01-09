import { ReactNode } from 'react';
import HelperListContext from './context';

const HelperListProvider = ({ children }: { children: ReactNode }) => {
    return (
        <HelperListContext.Provider value={{}}>
            {children}
        </HelperListContext.Provider>
    );
};

export default HelperListProvider;
