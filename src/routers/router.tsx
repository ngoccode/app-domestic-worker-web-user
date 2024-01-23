import Wrapper from 'components/wrapper';
import { useGetUser } from 'config/hooks/useGetUser';
import LoginPage from 'modules/auth/login/presentation';
import RegisterPage from 'modules/auth/register/presentation';
import ContractDetailPage from 'modules/contract-detail/presentasion';
import ContractPage from 'modules/contract/presentation';
import HelperDetailPage from 'modules/helper_detail/presentation';
import HelperListPage from 'modules/helper_list/presentation';
import HomePage from 'modules/home/presentation';
import ProfilePage from 'modules/profile/presentasion';
import RegisterHelperPage from 'modules/register_helper/presentation';
import UsersPage from 'modules/users/presentation';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
const WrapperRouter = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const WrapperRouterBlock = () => {
  const { user } = useGetUser();
  const navigate = useNavigate();
  if (!user) navigate('/app-login');
  return <Outlet />;
};

const RouterComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<WrapperRouter />}>
        <Route path='/app-login' element={<LoginPage />} />
        <Route path='/app-register' element={<RegisterPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/app-user' element={<UsersPage />} />
        <Route path='/app-helper-list' element={<HelperListPage />} />
        <Route path='/app-helper-detail/:id' element={<HelperDetailPage />} />
        <Route path='/app-helper-register' element={<RegisterHelperPage />} />
        <Route path='/app-contract' element={<ContractPage />} />
        <Route
          path='/app-contract-detail/:id'
          element={<ContractDetailPage />}
        />
        <Route element={<WrapperRouterBlock />}>
          <Route path='/app-profile' element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterComponent;
