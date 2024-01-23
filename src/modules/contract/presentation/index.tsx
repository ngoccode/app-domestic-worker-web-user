import { ContractProvider } from './context';
import UI from './view';

const ContractPage = () => {
  return (
    <ContractProvider>
      <UI />
    </ContractProvider>
  );
};

export default ContractPage;
