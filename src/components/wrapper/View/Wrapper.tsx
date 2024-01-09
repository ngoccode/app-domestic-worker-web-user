import React, { memo } from 'react';
import IconLogo from '../.././../assets/icons/logo.svg';
import { Button } from 'antd';
import Icon from 'components/Icon/Icon';

const WrapperUI = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-full'>
      <div className='px-6 py-2 border-b border-solid fixed w-full z-10 bg-white'>
        <div className='flex justify-between items-center'>
          <div>
            <img src={IconLogo} alt='' />
          </div>
          <div className='flex items-center gap-8'>
            <div className='flex gap-8 items-center'>
              <div className='cursor-pointer hover:text-[#FF5B22]'>
                Trang chủ
              </div>
              <div className='cursor-pointer hover:text-[#FF5B22]'>
                Về chúng tôi
              </div>
              <div className='cursor-pointer hover:text-[#FF5B22]'>Gợi ý</div>
              <div className='flex cursor-pointer hover:text-[#FF5B22]'>
                Dịch vụ <Icon icon='keyboard_arrow_down' />
              </div>
              <div className='cursor-pointer hover:text-[#FF5B22]'>
                Trở thành đối tác
              </div>
            </div>
            <div className='flex gap-2'>
              <Button className='!rounded-full ' size='large'>
                Đăng nhập
              </Button>
              <Button type='primary' size='large' className='!rounded-full'>
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='grow pt-[57px]'>{children}</div>
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
  );
};

export default memo(WrapperUI);
