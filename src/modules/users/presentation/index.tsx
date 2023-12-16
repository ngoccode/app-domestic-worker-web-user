import UsersProvider from './context/provider';
import UI from './views';

const UsersPage = () => {
  return (
    <UsersProvider>
      <UI />
    </UsersProvider>
  );
};
export default UsersPage;
