import { ReactNode, useEffect } from 'react';
import WrapperContext from './context';
import { WrapperAPi } from '../data/api';
import { MESSAGE_ERROR } from 'constance';
import { useDispatch } from 'react-redux';
import { changeAddress, changeLoading } from '../slice';
import { useGetToken } from 'config/hooks/useGetToken';
import { useGetUser } from 'config/hooks/useGetUser';
import { useNavigate } from 'react-router-dom';
import { App } from 'antd';

const api = new WrapperAPi();

const WrapperProvider = ({ children }: { children: ReactNode }) => {
  const { notification } = App.useApp();
  const dispatch = useDispatch();
  const { removeToken } = useGetToken();
  const { removeUser } = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getAddress();
        dispatch(changeAddress(response.address));
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.error ?? MESSAGE_ERROR,
        });
      }
    })();
  }, []);

  const onLogout = async () => {
    try {
      dispatch(changeLoading(true));
      await api.logout();
      notification.success({
        message: 'Đăng xuất thành công!',
      });
      removeToken();
      removeUser();
      navigate('/app-login');
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.error ?? MESSAGE_ERROR,
      });
    } finally {
      dispatch(changeLoading(false));
    }
  };

  const valueProvider = {
    onLogout,
  };
  return (
    <WrapperContext.Provider value={valueProvider}>
      {children}
    </WrapperContext.Provider>
  );
};

export default WrapperProvider;
