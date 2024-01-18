import { ReactNode } from 'react';
import { App, Form } from 'antd';
import LoginContext from './context';
import { useDispatch } from 'react-redux';
import { changeLoading } from 'components/wrapper/slice';
import { MESSAGE_ERROR } from 'constance';
import { LoginApi } from '../../data/api';
import { LoginPayload } from '../../model';
import { useNavigate } from 'react-router-dom';
import { useGetToken } from 'config/hooks/useGetToken';
import { useGetUser } from 'config/hooks/useGetUser';

const LoginProvider = ({ children }: { children: ReactNode }) => {
  const { notification } = App.useApp();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const api = new LoginApi();
  const navigate = useNavigate();
  const { setToken } = useGetToken();
  const { setUser } = useGetUser();

  const onConfirmLogin = async (value: {
    phoneNumber: string;
    password: string;
    remember: boolean;
  }) => {
    try {
      dispatch(changeLoading(true));
      const response = await api.login(
        new LoginPayload({
          phoneNumber: value.phoneNumber,
          password: value.password,
        })
      );
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem('refresh_token', response.refreshToken);
      navigate('/');
      notification.success({
        message: 'Đăng nhập thành công',
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.error ?? MESSAGE_ERROR,
      });
    } finally {
      dispatch(changeLoading(false));
    }
  };

  const value = {
    form,

    onConfirmLogin,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
