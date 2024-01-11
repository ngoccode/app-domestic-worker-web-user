import { FormInstance } from 'antd';
import { createContext } from 'react';

type RegisterContextValue = {
  form: FormInstance;
  province: {
    Id: string;
    Name: string;
    Districts: {
      Id: string;
      Name: string;
      Wards: {
        Id: string;
        Name: string;
      }[];
    }[];
  }[];
  districts: {
    Id: string;
    Name: string;
    Wards: { Id: string; Name: string }[];
  }[];
  wards: { Id: string; Name: string }[];

  onChangeForm: (value: any) => void;
};

const RegisterContext = createContext<RegisterContextValue | null>(null);

export default RegisterContext;
