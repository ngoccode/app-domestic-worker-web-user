import Wrapper from 'components/wrapper';
import LoginPage from 'modules/auth/login/presentation';
import RegisterPage from 'modules/auth/register/presentation';
import HelperDetailPage from 'modules/helper_detail/presentation';
import HelperListPage from 'modules/helper_list/presentation';
import HomePage from 'modules/home/presentation';
import RegisterHelperPage from 'modules/register_helper/presentation';
import UsersPage from 'modules/users/presentation';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
const login = false;
const WrapperRouter = () => {
  if (login) return <Navigate to={'/app-login'} replace />;
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const RouterComponent = () => {
  return (
    <Routes>
      <Route path='/app-login' element={<LoginPage />} />
      <Route path='/app-register' element={<RegisterPage />} />
      <Route path='/' element={<WrapperRouter />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/app-user' element={<UsersPage />} />
        <Route path='/app-helper-list' element={<HelperListPage />} />
        <Route path='/app-helper-detail/:id' element={<HelperDetailPage />} />
        <Route path='/app-helper-register' element={<RegisterHelperPage />} />
      </Route>
    </Routes>
  );
};

export default RouterComponent;
