import ContractDetailProvider from './context/provider';
import UI from './view';

const ContractDetailPage = () => {
  return (
    <ContractDetailProvider>
      <UI />
    </ContractDetailProvider>
  );
};

export default ContractDetailPage;
