import { ReactNode, useEffect, useState } from 'react';
import HelperListContext from './context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { App } from 'antd';
import { HelperListApi } from 'modules/helper_list/data';
import { MESSAGE_ERROR } from 'constance';
import { changeLoading } from 'components/wrapper/slice';
import { useGetUser } from 'config/hooks/useGetUser';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const DEFAULT_VALUE = {
  pagination: {
    page: 1,
    size: 8,
    total: 100,
  },
};

const splitArray = (array: any[], chunkSize: number) => {
  const resultArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }
  return resultArray;
};

const api = new HelperListApi();

const HelperListProvider = ({ children }: { children: ReactNode }) => {
  const { notification, modal } = App.useApp();
  const dispatch = useDispatch();
  const { user } = useGetUser();
  const navigate = useNavigate();
  const [pagination, setPagination] = useState(DEFAULT_VALUE.pagination);
  const { address } = useSelector((state: RootState) => state.wrapper);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [options, setOptions] = useState<{ label: string; value: number }[]>(
    []
  );
  const [filter, setFilter] = useState<any>(null);

  const [data, setData] = useState<any>([]);
  const [dataRecommend, setDataRecommend] = useState<any[]>([]);

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
    if (user) {
      (async () => {
        try {
          const response = await api.getListRecommend();
          setDataRecommend(splitArray(response.results, 4));
        } catch (error: any) {
          notification.error({
            message: error?.response?.data?.error ?? MESSAGE_ERROR,
          });
        }
      })();
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        dispatch(changeLoading(true));
        const response = await api.getListUser({
          page: pagination.page,
          size: pagination.size,
          role_code: 'helper',
          province: filter?.province,
          district: filter?.district,
          ward: filter?.ward,
          category: filter?.category?.join(','),
          working_form: filter?.working_form,
          experience: filter?.experience,
        });
        setData(
          response?.results?.map((ele: any) => ({
            ...ele,
            key: ele.user_id,
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

  const onChangePagination = (page: number, size: number) => {
    setPagination((current) => ({ ...current, page, size }));
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

  const onFilter = (value: any) => {
    setFilter(value);
  };

  const value = {
    pagination,
    province: address,
    districts,
    wards,
    options,
    data,
    dataRecommend,
    onChangePagination,
    onChangeFilter,
    onFilter,
  };
  return (
    <HelperListContext.Provider value={value}>
      {children}
    </HelperListContext.Provider>
  );
};

export default HelperListProvider;
