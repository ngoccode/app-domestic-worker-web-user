import Wrapper from 'components/wrapper';
import LoginPage from 'modules/auth/login/presentation';
import RegisterPage from 'modules/auth/register/presentation';
import HomePage from 'modules/home/presentation';
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
      </Route>
    </Routes>
  );
};

export default RouterComponent;
