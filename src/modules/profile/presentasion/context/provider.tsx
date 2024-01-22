import { ReactNode, useState } from 'react';
import ProfileContext from './context';
import { App, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetUser } from 'config/hooks/useGetUser';
import { changeLoading } from 'components/wrapper/slice';
import { MESSAGE_ERROR } from 'constance';
import { ProfileApi } from 'modules/profile/data';
import dayjs from 'dayjs';

const api = new ProfileApi();

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { user } = useGetUser();
  const dispatch = useDispatch();
  const { notification } = App.useApp();
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [imageUrl, setImageUrl] = useState<any>();
  const [fileImg, setFileImg] = useState<any>(null);

  const onOpen = () => {
    setOpen(true);
    form.setFieldsValue({
      full_name: user?.full_name,
      email: user?.email,
      date_of_birth: user?.date_of_birth ? dayjs(user?.date_of_birth) : null,
      gender: user?.gender,
      province: user?.province,
      district: user?.district,
      ward: user?.ward,
    });
    setImageUrl(
      `${process.env.REACT_APP_BASE_URL}/image/${user?.profile_picture}`
    );

    onChangeForm(user);
  };

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
  const onUpdate = async (value: any) => {
    try {
      dispatch(changeLoading(true));
      const payload = {
        ...value,
        username: user?.username,
        user_id: user?.user_id,
        role_id: user?.role_id,
        phone_number: user?.phone_number,
        profile_picture: user?.profile_picture,
      };
      if (fileImg) {
        const url = await api.upload(fileImg);
        payload.profile_picture = url.results;
      }
      await api.update(payload);

      notification.success({
        message: 'Cập nhật thành công!',
      });

      localStorage.setItem(
        'user',
        JSON.stringify({
          ...user,
          ...payload,
        })
      );
      setOpen(false);
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

  const onCancel = () => {
    setOpen(false);
  };
  const value = {
    form,
    open,
    province: address,
    districts,
    wards,
    imageUrl,
    fileImg,

    onOpen,
    onChangeForm,
    onChangeFile,
    onCancel,
    onUpdate,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
