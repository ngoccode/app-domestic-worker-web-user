import { useContext } from 'react';
import HelperListContext from './context';

export const useHelperListContext = () => {
    const context = useContext(HelperListContext);

    if (!context) throw new Error('useContext needed HelperListContext!');

    return context;
};
