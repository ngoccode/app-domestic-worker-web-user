import { ReactNode, useEffect, useState } from 'react';
import ContractDetailContext from './context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { App, Form } from 'antd';
import { ContractDetailApi } from 'modules/contract-detail/data';
import { MESSAGE_ERROR } from 'constance';
import { changeLoading } from 'components/wrapper/slice';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useGetUser } from 'config/hooks/useGetUser';
import { ExclamationCircleFilled } from '@ant-design/icons';

const api = new ContractDetailApi();

const ContractDetailProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { notification, modal } = App.useApp();
  const [form] = Form.useForm();
  const { user } = useGetUser();
  const { id } = useParams();
  const [detail, setDetail] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch(changeLoading(true));
        const response = await api.getContractDetail(id ?? 0);
        setDetail(response);
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.error ?? MESSAGE_ERROR,
        });
      } finally {
        dispatch(changeLoading(false));
      }
    })();
  }, []);

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

  const onOpen = () => {
    setOpen(true);
    const obj = { ...detail };
    delete obj.time_end;
    form.setFieldsValue(obj);
    if (detail?.time_end) {
      form.setFieldValue('time_end', dayjs(detail?.time_end));
    }
    const categories = detail?.categories?.map((item: any) => item.category_id);
    form.setFieldValue('categories', categories);
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
  const onUpdate = async (value: any) => {
    try {
      dispatch(changeLoading(true));
      const payload = {
        contract_id: detail?.contract_id,
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

      await api.updateContract(payload);
      setDetail((current: any) => ({ ...current, ...payload }));
      setOpen(false);
      notification.success({
        message: 'Chỉnh sửa hợp đồng thành công',
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.error ?? MESSAGE_ERROR,
      });
    } finally {
      dispatch(changeLoading(false));
    }
  };

  const onClickComplete = async () => {
    modal.confirm({
      title: 'Xác nhận hoàn thành hợp đồng?',
      icon: <ExclamationCircleFilled />,
      content: 'Bạn có chắc chắn muốn xác nhận hợp đồng này không',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      async onOk() {
        try {
          dispatch(changeLoading(true));
          await api.putStatus([
            {
              contract_id: detail?.contract_id,
              contract_status: 'completed',
            },
          ]);
          notification.success({
            message: 'Xác nhận hợp đồng thành công!',
          });
          setDetail((cur: any) => ({ ...cur, contract_status: 'completed' }));
        } catch (error: any) {
          notification.error({
            message: error?.response?.data?.error ?? MESSAGE_ERROR,
          });
        } finally {
          dispatch(changeLoading(false));
        }
      },
    });
  };

  const value = {
    detail,
    open,
    province: address,
    districts,
    wards,
    options,
    form,
    onOpen,
    onClose,
    onChangeFilter,
    onUpdate,
    onClickComplete,
  };
  return (
    <ContractDetailContext.Provider value={value}>
      {children}
    </ContractDetailContext.Provider>
  );
};

export default ContractDetailProvider;
