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

  const value = {
    form,
    province: address,
    districts,
    wards,

    onChangeForm,
  };
  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
