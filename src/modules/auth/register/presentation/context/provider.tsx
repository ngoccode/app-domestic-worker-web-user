import { ReactNode, useState } from 'react';
import RegisterContext from './context';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Form } from 'antd';

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

const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [form] = Form.useForm();
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [districts, setDistricts] = useState<Districts>([]);
  const [wards, setWards] = useState<Wards>([]);

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

  const onSubmitForm = (value: {
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
    console.log(value);
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
