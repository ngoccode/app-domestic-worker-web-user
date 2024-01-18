import { ReactNode, useEffect, useState } from 'react';
import HelperDetailContext from './context';
import { HelperDetailApi } from 'modules/helper_detail/data';
import { useParams } from 'react-router-dom';
import { App } from 'antd';
import { MESSAGE_ERROR } from 'constance';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoading } from 'components/wrapper/slice';
import { RootState } from 'store';
import { useGetUser } from 'config/hooks/useGetUser';

const api = new HelperDetailApi();

const HelperDetailProvider = ({ children }: { children: ReactNode }) => {
  const { notification } = App.useApp();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<any>(null);
  const { user } = useGetUser();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);

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
  }, []);

  useEffect(() => {
    (async () => {
      try {
        dispatch(changeLoading(true));
        const res = await api.getDetail(+(id ?? 0));
        setDetail(res.results);
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.error ?? MESSAGE_ERROR,
        });
      } finally {
        dispatch(changeLoading(false));
      }
    })();
  }, [id]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChangeFilter = (value: any) => {
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

  const onCreate = async (value: any) => {
    try {
      dispatch(changeLoading(true));
      console.log(value.salary);
      const payload = {
        salary: +value.salary,
        province: value.province,
        district: value.district,
        ward: value.ward,
        address: value.address,
        description: value.description,
        time_end: value.time_end,
        working_form: value.working_form,
        categories: value.categories?.map((ele: any) => ({ category_id: ele })),
        helper_id: detail.user_id,
        user_id: user.user_id,
      };

      await api.createContract(payload);
      setDetail((current: any) => ({ ...current, contract: payload }));
      setOpen(false);
      notification.success({
        message: 'Tạo hợp đồng thành công',
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
    detail,
    open,
    province: address,
    districts,
    wards,
    options,
    onOpen,
    onClose,
    onChangeFilter,
    onCreate,
  };
  return (
    <HelperDetailContext.Provider value={value}>
      {children}
    </HelperDetailContext.Provider>
  );
};

export default HelperDetailProvider;
