import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Icon from 'components/Icon/Icon';

const UI = () => {
  return (
    <div className='flex flex-col items-center mt-24'>
      <div className='uppercase text-4xl font-bold'>Welcome to website</div>
      <div className='text-[#FF852C] mt-2'>Tìm người giúp việc</div>
      <div className='w-1/3 mt-8 !shadow-[0_8px_25px_0_rgba(13,10,44,0.06)] rounded-full'>
        <Input
          size='large'
          suffix={<SearchOutlined />}
          className='!rounded-full !px-[28px] !py-[18px]'
          placeholder='Nhập tìm kiếm người giúp việc dọn dẹp...'
        />
      </div>
      <div className='flex mt-16 gap-16'>
        <div className='shadow-2xl py-8 px-10 rounded-3xl flex flex-col items-center w-[300px] cursor-pointer hover:opacity-80'>
          <div className='p-3 rounded-xl bg-[#FFF1DA] w-fit mb-4'>
            <Icon icon='access_alarm_icon' color='#191847' />
          </div>
          <div className='text-[#1E1D4C] mb-6'>Fulltime - Part time</div>
          <div className='text-[#5E6282] text-center'>
            Tìm kiếm người giúp việc toàn thời gian hoặc theo giờ
          </div>
        </div>
        <div className='shadow-2xl py-8 px-10 rounded-3xl flex flex-col items-center w-[300px] cursor-pointer hover:opacity-80'>
          <div className='p-3 rounded-xl bg-[#FFF1DA] w-fit mb-4'>
            <Icon icon='access_alarm_icon' color='#191847' />
          </div>
          <div className='text-[#1E1D4C] mb-6'>Chăm sóc</div>
          <div className='text-[#5E6282] text-center'>
            Tìm người chăm sóc trẻ em - người già
          </div>
        </div>
        <div className='shadow-2xl py-8 px-10 rounded-3xl flex flex-col items-center w-[300px] cursor-pointer hover:opacity-80'>
          <div className='p-3 rounded-xl bg-[#FFF1DA] w-fit mb-4'>
            <Icon icon='access_alarm_icon' color='#191847' />
          </div>
          <div className='text-[#1E1D4C] mb-6'>Tổng vệ sinh</div>
          <div className='text-[#5E6282] text-center'>
            Tìm kiếm giúp việc tổng vệ sinh nhà cửa - văn phòng
          </div>
        </div>
      </div>

      <div className='bg-[#FF852C] my-24 w-full flex justify-center'>
        <div className='py-8 w-2/3'>
          <div className='text-white font-bold text-2xl mb-4'>
            Đăng ký trở thành cộng tác viên
          </div>
          <div className='text-white mb-8'>
            Nếu bạn đang muốn tìm công việc giúp việc cho gia đình, hẫy đăng ký
            với chúng tôi để tìm kiếm được công việc ưng ý.
          </div>
          <Button className='!text-[#FF852C] !rounded-full' size='large'>
            Đăng ký cộng tác viên
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UI;
