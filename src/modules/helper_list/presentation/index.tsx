import HelperListProvider from './context/provider';
import UI from './view/UI';

const HelperListPage = () => {
    return (
        <HelperListProvider>
            <UI />
        </HelperListProvider>
    );
};
export default HelperListPage;
