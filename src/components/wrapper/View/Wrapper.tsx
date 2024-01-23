import React, { memo, useMemo } from 'react';
import IconLogo from '../.././../assets/icons/logo.svg';
import { Button, Dropdown, MenuProps } from 'antd';
import Spinner from 'components/Spinner/Spinner';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetToken } from 'config/hooks/useGetToken';
import { Location } from 'constance/location';
import { combineClass } from 'utils/class-name';
import { useGetUser } from 'config/hooks/useGetUser';
import {
  CaretDownOutlined,
  UserOutlined,
  UploadOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { useWrapperContext } from '../context';

const WrapperUI = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useSelector((state: RootState) => state.wrapper);
  const { token } = useGetToken();
  const { user } = useGetUser();
  const location = useLocation();
  const navigate = useNavigate();
  const { onLogout } = useWrapperContext();

  const onChangePage = (link: string) => {
    return () => {
      navigate(link);
    };
  };

  const handleClassActive = (lc: string) => {
    if (lc === location.pathname) return 'text-[#FF5B22]';

    return undefined;
  };

  const itemAvatar: MenuProps['items'] = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Tài khoản',
      onClick: onChangePage('/app-profile'),
    },
    {
      key: '2',
      icon: <FileTextOutlined />,
      label: 'Hợp đồng',
      onClick: () => navigate('/app-contract'),
    },

    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Đăng xuất',
      onClick: onLogout,
    },
  ];

  const headerRight = useMemo(() => {
    if (!token)
      return (
        <div className='flex gap-2'>
          {location.pathname === Location.login || (
            <Button
              className='!rounded-full '
              size='large'
              onClick={onChangePage(Location.login)}
            >
              Đăng nhập
            </Button>
          )}
          {location.pathname === Location.register || (
            <Button
              type='primary'
              size='large'
              className='!rounded-full'
              onClick={onChangePage(Location.register)}
            >
              Đăng ký
            </Button>
          )}
        </div>
      );

    return (
      <Dropdown menu={{ items: itemAvatar }}>
        <div className='flex items-center gap-1'>
          <span>{user?.full_name ?? 'User'}</span>
          <CaretDownOutlined />
        </div>
      </Dropdown>
    );
  }, [token, location]);

  return (
    <Spinner spinning={loading}>
      <div className='flex flex-col min-h-full'>
        <div className='px-6 py-2 border-b border-solid fixed w-full z-10 bg-white'>
          <div className='flex justify-between items-center'>
            <div
              className='cursor-pointer'
              onClick={onChangePage(Location.home)}
            >
              <img src={IconLogo} alt='' />
            </div>
            <div className='flex items-center gap-8'>
              <div className='flex gap-8 items-center'>
                <div
                  className={combineClass(
                    'cursor-pointer hover:text-[#FF5B22]',
                    handleClassActive(Location.home)
                  )}
                  onClick={onChangePage(Location.home)}
                >
                  Trang chủ
                </div>
                <div
                  className={combineClass(
                    'cursor-pointer hover:text-[#FF5B22]',
                    handleClassActive(Location.about)
                  )}
                  onClick={onChangePage(Location.about)}
                >
                  Về chúng tôi
                </div>
                {/* <div
                  className={combineClass(
                    'cursor-pointer hover:text-[#FF5B22]',
                    handleClassActive(Location.suggest)
                  )}
                  onClick={onChangePage(Location.suggest)}
                >
                  Gợi ý
                </div>
                <div
                  className={combineClass(
                    'flex cursor-pointer hover:text-[#FF5B22]',
                    handleClassActive(Location.service)
                  )}
                  onClick={onChangePage(Location.service)}
                >
                  Dịch vụ
                </div> */}
                <div
                  className={combineClass(
                    'cursor-pointer hover:text-[#FF5B22]',
                    handleClassActive(Location.helper)
                  )}
                  onClick={onChangePage(Location.helper)}
                >
                  Người giúp việc
                </div>
                <div
                  className={combineClass(
                    'cursor-pointer hover:text-[#FF5B22]',
                    handleClassActive(Location.partner)
                  )}
                  onClick={onChangePage(Location.partner)}
                >
                  Trở thành đối tác
                </div>
              </div>
              {headerRight}
            </div>
          </div>
        </div>
        <div className='flex-1 pt-[57px]'>{children}</div>
        <div className='flex border-t py-4'>
          <div className='w-1/4 flex justify-center'>
            <div>
              <img className='w-[150%]' src={IconLogo} alt='' />
            </div>
          </div>
          <div className='flex flex-1 gap-x-24'>
            <div>
              <div className='font-bold text-large mb-5'>Công ty</div>
              <div className='flex flex-col gap-3'>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Về chúng tôi
                </div>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Tuyển dụng
                </div>
              </div>
            </div>
            <div>
              <div className='font-bold text-large mb-5'>Dịch vụ</div>
              <div className='flex flex-col gap-3'>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Giúp việc nhà
                </div>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Giúp việc văn phòng
                </div>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Chăm sóc trẻ em
                </div>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Chăm sóc người già
                </div>
              </div>
            </div>
            <div>
              <div className='font-bold text-large mb-5'>Khác</div>
              <div className='flex flex-col gap-3'>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Kinh nghiệm hay
                </div>
                <div className='text-[#5E6282] cursor-pointer hover:text-[#FF5B22]'>
                  Câu chuyện người giúp việc
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <span>© 2023 by ngoc.nguyenyen</span>
        </div>
      </div>
    </Spinner>
  );
};

export default memo(WrapperUI);
