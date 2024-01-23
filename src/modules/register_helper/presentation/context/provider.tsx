import { ReactNode, useEffect, useState } from 'react';
import RegisterHelperContext from './context';
import { useDispatch, useSelector } from 'react-redux';
import { App, Form } from 'antd';
import { RootState } from 'store';
import { MESSAGE_ERROR } from 'constance';
import { changeLoading } from 'components/wrapper/slice';
import { RegisterHelperApi } from 'modules/register_helper/data';
const api = new RegisterHelperApi();

const RegisterHelperProvider = ({ children }: { children: ReactNode }) => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { notification } = App.useApp();
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [options, setOptions] = useState<{ label: string; value: number }[]>(
    []
  );
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>();
  const [fileImg, setFileImg] = useState<any>(null);
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getListCategory();
        const value = response.results.map((ele: any) => ({
          label: ele.name,
          value: ele.category_id,
        }));
        setOptions(value);
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.error ?? MESSAGE_ERROR,
        });
      }
    })();
    (async () => {
      try {
        const response = await api.getListRole();
        const value = response?.results?.map((ele: any) => ({
          label: ele.name,
          value: ele.role_id,
          code: ele.code,
        }));
        setRoles(value);
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.error ?? MESSAGE_ERROR,
        });
      }
    })();
  }, []);

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

  const onCreateUser = async (value: any) => {
    try {
      dispatch(changeLoading(true));
      const roleUser = roles?.find((r: any) => r.code === 'helper');
      const categories = value.categories?.map((ele: any) => ({
        category_id: ele,
      }));
      const payload = {
        ...value,
        role_id: roleUser?.value,
        categories: categories,
        username: value.phone_number,
      };
      if (fileImg) {
        const url = await api.upload(fileImg);
        payload.profile_picture = url.results;
      }
      const res = await api.create(payload);

      await api.createProfile({
        user_id: res?.data?.results,

        ...value,
      });

      setRegisterSuccess(true);

      notification.success({
        message: 'Thêm thành công!',
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.error ?? MESSAGE_ERROR,
      });
    } finally {
      dispatch(changeLoading(false));
    }
  };

  const onChangeFile = (file: any) => {
    setImageUrl(URL.createObjectURL(file.file));
    setFileImg(file.file);
  };

  const value = {
    registerSuccess,
    form,
    options,
    province: address,
    districts,
    wards,
    loading,
    imageUrl,
    roles,

    onChangeForm,
    onChangeFile,
    onCreateUser,
  };
  return (
    <RegisterHelperContext.Provider value={value}>
      {children}
    </RegisterHelperContext.Provider>
  );
};

export { RegisterHelperProvider };
