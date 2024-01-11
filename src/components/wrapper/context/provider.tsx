import { ReactNode, useEffect } from 'react';
import WrapperContext from './context';
import { WrapperAPi } from '../data/api';
import { notification } from 'antd';
import { MESSAGE_ERROR } from 'constance';
import { useDispatch } from 'react-redux';
import { changeAddress } from '../slice';

const api = new WrapperAPi();

const WrapperProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

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

  const valueProvider = {};
  return (
    <WrapperContext.Provider value={valueProvider}>
      {children}
    </WrapperContext.Provider>
  );
};

export default WrapperProvider;
