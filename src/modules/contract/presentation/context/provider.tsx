import { ReactNode, useEffect, useState } from 'react';
import ContractContext from './context';
import { useDispatch } from 'react-redux';
import { changeLoading } from 'components/wrapper/slice';
import { App, Form } from 'antd';
import { MESSAGE_ERROR } from 'constance';
import { ContractApi } from 'modules/contract/data';
import { ExclamationCircleFilled } from '@ant-design/icons';

const api = new ContractApi();

const ContractProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { notification, modal } = App.useApp();
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
    total: 0,
  });
  const [filter, setFilter] = useState({
    keyword: '',
    status: '',
    working_form: '',
    from: '',
    to: '',
  });
  const [contract, setContract] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [selectedRow, setSelectedRow] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch(changeLoading(true));
        const response = await api.getList({
          page: pagination.page,
          size: pagination.size,
          keyword: filter.keyword,
          from: filter.from,
          to: filter.to,
          working_form: filter.working_form,
          status: filter.status,
        });
        setContract(
          response.results?.map((value: any) => ({
            ...value,
            key: value.contract_id,
          }))
        );
        setPagination((current) => ({ ...current, total: response.total }));
      } catch (error: any) {
        notification.error({
          message: error?.response?.data?.error ?? MESSAGE_ERROR,
        });
      } finally {
        dispatch(changeLoading(false));
      }
    })();
  }, [pagination.page, pagination.size, filter]);

  const onSelectTable = (selectedRow: any) => {
    setSelectedRow(selectedRow);
  };

  const onChangePagination = (page: number, size: number) => {
    setPagination((current) => ({ ...current, page, size }));
  };

  let searchContract: any;
  const onChangeFilter = (value: any) => {
    if (searchContract) clearTimeout(searchContract);
    searchContract = setTimeout(() => {
      if (value.keyword) {
        const keyword = form.getFieldValue('keyword');
        setFilter((current) => ({ ...current, keyword }));
      }
    }, 1000);
  };

  const onClickCancel = async () => {
    modal.confirm({
      title: 'Hủy hợp đồng?',
      icon: <ExclamationCircleFilled />,
      content: 'Bạn có chắc chắn muốn hủy hợp đồng này không',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      async onOk() {
        try {
          dispatch(changeLoading(true));
          await api.putStatus(
            selectedRow?.map((ele: any) => ({
              contract_id: ele,
              contract_status: 'canceled',
            }))
          );
          notification.success({
            message: 'Hủy hợp đồng thành công!',
          });
          setContract((current) =>
            current.map((ele) => {
              const obj = { ...ele };
              if (selectedRow?.includes(obj.contract_id)) {
                obj.contract_status = 'canceled';
              }
              return obj;
            })
          );
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

  const onFilter = (value: any) => {
    setFilter((current) => ({
      ...current,
      status: value.status,
      working_form: value.working_form,
      from: value.range?.[0],
      to: value.to?.[1],
    }));
  };
  const value = {
    contract,
    pagination,
    form,
    selectedRow,
    onSelectTable,
    onChangePagination,
    onChangeFilter,
    onClickCancel,
    onFilter,
  };
  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};

export { ContractProvider };
