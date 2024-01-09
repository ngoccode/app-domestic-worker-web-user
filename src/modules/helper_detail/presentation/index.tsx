import HelperDetailProvider from './context/provider';
import UI from './view';

const HelperDetailPage = () => {
  return (
    <HelperDetailProvider>
      <UI />
    </HelperDetailProvider>
  );
};

export default HelperDetailPage;
