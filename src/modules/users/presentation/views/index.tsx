import { Button, Form, Input, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Item } = Form;

type DataType = {
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên tài khoản',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Tên người dùng',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Quyền',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '',
    key: 'btn',
    width: 100,
    render: () => (
      <div className='flex gap-1'>
        <Button>
          <EyeOutlined />
        </Button>
        <Button>
          <EditOutlined />
        </Button>
        <Button>
          <DeleteOutlined />
        </Button>
      </div>
    ),
  },
];

const dataSource = [
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },

  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
  {
    key: Math.random(),
    username: 'huongnt',
    name: 'Nguyễn Tất Hướng',
    email: 'huongnt.it.haui@gmail.com',
    phoneNumber: '098534343',
    address: 'Bắc Giang',
    role: 'admin',
  },
];

const UI = () => {
  return (
    <div className='flex flex-col'>
      <Form name='user-filter'>
        <div className='flex p-4 items-center justify-between'>
          <Item name='search' className='w-2/3'>
            <Input
              prefix={<SearchOutlined />}
              size='large'
              placeholder='Tìm kiếm người dùng'
            />
          </Item>
          <Item>
            <Button type='primary' size='large'>
              Tạo mới
            </Button>
          </Item>
        </div>
      </Form>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default UI;
