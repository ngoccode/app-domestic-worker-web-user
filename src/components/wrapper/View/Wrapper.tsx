import React, { memo, useEffect } from 'react';
import { UploadOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, Avatar, Dropdown, Breadcrumb } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useWrapperContext } from '../context';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider, Content, Header } = Layout;

const KEY_EMPTY = 'empty';

const itemsMenu = [
  {
    key: KEY_EMPTY,
    icon: <HomeOutlined />,
    label: 'Trang chủ',
  },
  {
    key: 'app-user',
    icon: <UserOutlined />,
    label: 'Quản lý người dùng',
  },
];

const items: MenuProps['items'] = [];
itemsMenu.forEach((item) => items.push(item));

const itemAvatar: MenuProps['items'] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Profile',
  },

  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'Logout',
  },
];

const WrapperUI = ({ children }: { children: React.ReactNode }) => {
  const { menuKey, onChangeMenu } = useWrapperContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onChangeMenu(location.pathname?.slice(1) || KEY_EMPTY);
  }, [onChangeMenu, location]);

  const onClickMenu = ({ key }: { key: string }) => {
    onChangeMenu(key);
    if (key === KEY_EMPTY) key = '';
    navigate(`/${key}`);
  };

  const findBreadcrumb = () => {
    const itemFound = itemsMenu.find((item) => item.key === menuKey);
    if (itemFound?.key === KEY_EMPTY) return undefined;

    return itemFound?.label ?? undefined;
  };

  return (
    <Layout className='h-screen'>
      <Sider trigger={null}>
        <div className='w-full h-10 bg-orange-500 mb-2' />
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[menuKey]}
          items={items}
          onClick={onClickMenu}
        />
      </Sider>
      <Layout>
        <Header className='p-0 bg-white'>
          <div className='flex justify-end h-full items-center px-4 gap-2'>
            <Avatar size={40}>User</Avatar>
            <div>
              <Dropdown menu={{ items: itemAvatar }}>
                <div className='flex items-center gap-1'>
                  <span>Hướng</span>
                  <CaretDownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Breadcrumb className='p-4 pb-0'>
          <Breadcrumb.Item
            onClick={() => navigate('/')}
            className='hover:underline cursor-pointer'
          >
            <div className='flex gap-1 items-center'>
              <HomeOutlined />
              Home
            </div>
          </Breadcrumb.Item>
          {findBreadcrumb() ? (
            <Breadcrumb.Item>{findBreadcrumb()}</Breadcrumb.Item>
          ) : null}
        </Breadcrumb>
        <Content className='p-4'>
          <div className='bg-white rounded-sm w-full h-full'>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default memo(WrapperUI);
