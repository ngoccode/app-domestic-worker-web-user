import { Avatar, Button, DatePicker, Form, Input, Select } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useAddress } from 'hooks/address';
import dayjs from 'dayjs';
import { CONTRACT_STATUS, CONTRACT_STATUS_OPTION } from 'constance/contract';
import { useContractContext } from '../context';
import { useNavigate } from 'react-router-dom';

const { Item } = Form;

const OPTION_WORKING = [
  {
    label: 'Toàn thời gian',
    value: 'full_time',
  },
  {
    label: 'Bán thời gian',
    value: 'past_time',
  },
];

const UI = () => {
  const { getDistrict, getProvince, getWard } = useAddress();
  const navigate = useNavigate();
  const {
    form,
    contract,
    pagination,
    selectedRow,
    onSelectTable,
    onChangePagination,
    onChangeFilter,
    onClickCancel,
    onFilter,
  } = useContractContext();
  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      key: 'contract_code',
      dataIndex: 'contract_code',
      width: 100,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
      width: 120,
      key: 'created_at',
      render(row) {
        if (!row) return '-';
        return dayjs(row).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Tên người giúp việc',
      key: 'helper',
      width: 200,
      render(row) {
        return row?.helper?.full_name;
      },
    },
    {
      title: 'Địa chỉ làm việc',
      key: 'address',
      width: 250,
      render(row) {
        return `${getWard(row.ward)?.Name ?? ''}-${
          getDistrict(row.district)?.Name ?? ''
        }-${getProvince(row.province)?.Name ?? ''}`;
      },
    },
    {
      title: 'Ngày sinh',
      key: 'date_of_birth',
      width: 120,
      render(row) {
        return row?.helper?.date_of_birth
          ? dayjs(row?.helper?.date_of_birth).format('YYYY-MM-DD')
          : '-';
      },
    },

    {
      title: 'Hình thức làm việc',
      key: 'working_form',
      width: 160,
      render(row) {
        if (!row.working_form) return '-';
        return row.working_form === 'full_time'
          ? 'Toàn thời gian'
          : 'Bán thời gian';
      },
    },
    {
      title: 'Ngày kết thúc hợp đồng',
      key: 'date_of_birth',
      width: 150,
      render(row) {
        return row?.time_end ? dayjs(row?.time_end).format('YYYY-MM-DD') : '-';
      },
    },
    {
      title: 'Trạng thái',
      key: 'contract_status',
      dataIndex: 'contract_status',
      render(_, column) {
        if (!column.contract_status) return '-';
        return CONTRACT_STATUS[column.contract_status];
      },
    },
    {
      title: 'Mức lương',
      key: 'salary',
      dataIndex: 'salary',
      render(row) {
        if (!row) return '-';
        return row.toLocaleString('en-US');
      },
    },
  ];
  return (
    <div className='flex flex-col p-6'>
      <Form
        name='user-filter'
        form={form}
        onValuesChange={onChangeFilter}
        onFinish={onFilter}
      >
        <div className='flex flex-col'>
          <div className='flex p-4 items-center justify-end'>
            <Item name='search' className='w-2/3'>
              <Input
                prefix={<SearchOutlined />}
                size='large'
                placeholder='Tìm kiếm'
              />
            </Item>
          </div>

          <div className='flex justify-between items-center px-6 py-6 rounded-lg bg-slate-50'>
            <div className='flex gap-4'>
              <div className='flex gap-1 items-center'>
                <div>Trạng thái</div>
                <Item name='status'>
                  <Select
                    size='large'
                    className='!w-[200px]'
                    options={CONTRACT_STATUS_OPTION}
                  />
                </Item>
              </div>
              <div className='flex gap-1 items-center'>
                <div>Hình thức làm việc</div>
                <Item name='working_form'>
                  <Select
                    size='large'
                    className='!w-[200px]'
                    options={OPTION_WORKING}
                  />
                </Item>
              </div>
              <div className='flex gap-1 items-center'>
                <div>Thời gian tạo</div>
                <Item name='range'>
                  <DatePicker.RangePicker size='large' placeholder={['', '']} />
                </Item>
              </div>
            </div>
            <div className='flex gap-5'>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                className='!px-6'
              >
                Lọc
              </Button>
              <Button
                size='large'
                className='!px-6'
                onClick={onClickCancel}
                disabled={selectedRow?.length === 0}
              >
                Hủy hợp đồng
              </Button>
            </div>
          </div>
        </div>
      </Form>
      <div className='mt-2'>
        <Table
          dataSource={contract}
          columns={columns}
          scroll={{
            y: '62vh',
            x: 'max-content',
          }}
          rowSelection={{
            selectedRowKeys: selectedRow,
            onChange: onSelectTable,
          }}
          onRow={(record) => {
            return {
              className: 'cursor-pointer',
              onClick: (event) => {
                navigate(`/app-contract-detail/${record.contract_id}`);
              },
            };
          }}
          pagination={{
            current: pagination.page,
            pageSize: pagination.size,
            total: pagination.total,
            onChange: onChangePagination,
          }}
        />
      </div>
    </div>
  );
};

export default UI;
