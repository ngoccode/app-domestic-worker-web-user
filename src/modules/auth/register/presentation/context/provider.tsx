import { ReactNode, useState } from 'react';
import RegisterContext from './context';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Form, notification } from 'antd';
import { RegisterApi } from '../../data/api';
import { MESSAGE_ERROR } from 'constance';
import { RegisterPayload } from '../../model';
import { useNavigate } from 'react-router-dom';

type Districts = {
  Id: string;
  Name: string;
  Wards: {
    Id: string;
    Name: string;
  }[];
}[];

type Wards = {
  Id: string;
  Name: string;
}[];

const api = new RegisterApi();

const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [form] = Form.useForm();
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [districts, setDistricts] = useState<Districts>([]);
  const [wards, setWards] = useState<Wards>([]);
  const navigate = useNavigate();

  const onChangeForm = (value: any) => {
    if (value.province) {
      const district = address.find(
        (item) => item.Id === value.province
      )?.Districts;
      setDistricts(district ?? []);
    }
    if (value.district) {
      const ward = districts.find((item) => item.Id === value.district)?.Wards;
      setWards(ward ?? []);
    }
  };

  const onSubmitForm = async (value: {
    name: string;
    phoneNumber: string;
    dateOfBirth: Date;
    gender: string;
    province: string;
    district: string;
    ward: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      await api.register(
        new RegisterPayload({
          fullName: value.name,
          phoneNumber: value.phoneNumber,
          dateOfBirth: value.dateOfBirth,
          gender: value.gender,
          province: value.province,
          district: value.district,
          ward: value.district,
          password: value.password,
        })
      );
      notification.success({
        message: 'Đăng ký thành công thành công',
      });
      navigate('/app-login');
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.error ?? MESSAGE_ERROR,
      });
    }
  };

  const value = {
    form,
    province: address,
    districts,
    wards,

    onChangeForm,
    onSubmitForm,
  };
  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
