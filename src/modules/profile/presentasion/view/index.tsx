import { Button } from 'antd';
import { useGetUser } from 'config/hooks/useGetUser';
import { BASE_IMG } from 'constance';
import dayjs from 'dayjs';
import { useAddress } from 'hooks/address';
import { EditOutlined } from '@ant-design/icons';
import ModalUpdate from '../components/ModalUpdate';
import { useProfileContext } from '../context';

const UI = () => {
  const { user } = useGetUser();
  const { onOpen } = useProfileContext();
  const { getDistrict, getProvince, getWard } = useAddress();
  const getLinkImage = (url: string) => {
    if (!url) return '';
    return `${process.env.REACT_APP_BASE_URL}/image/${url}`;
  };
  return (
    <>
      <ModalUpdate />
      <div className='flex justify-center py-12'>
        <div className='px-10 pt-8 pb-16 rounded-2xl shadow-lg bg-white w-2/3'>
          <div className='flex flex-col gap-8'>
            <div className='flex justify-end'>
              <Button
                size='large'
                type='primary'
                icon={<EditOutlined />}
                onClick={onOpen}
              >
                Chỉnh sửa
              </Button>
            </div>
            <div className='flex gap-12'>
              <div>
                <img
                  src={getLinkImage(user?.profile_picture) || BASE_IMG}
                  alt=''
                  className='w-[224px] h-[224px] object-cover rounded-xl'
                />
              </div>

              <div className='flex flex-col gap-3'>
                <div className='flex'>
                  <div className='w-[150px] font-semibold text-xl text-slate-500'>
                    Họ và tên
                  </div>
                  <div className='text-xl'>{user?.full_name}</div>
                </div>
                <div className='flex'>
                  <div className='w-[150px] font-semibold text-xl text-slate-500'>
                    Email
                  </div>
                  <div className='text-xl'>{user?.email}</div>
                </div>
                <div className='flex'>
                  <div className='w-[150px] font-semibold text-xl text-slate-500'>
                    Ngày sinh
                  </div>
                  <div className='text-xl'>
                    {user?.date_of_birth &&
                      dayjs(user?.date_of_birth).format('DD/MM/YYYY')}
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-[150px] font-semibold text-xl text-slate-500'>
                    Giới tính
                  </div>
                  <div className='text-xl'>
                    {user?.gender
                      ? user.gender === 'male'
                        ? 'Nam'
                        : 'Nữ'
                      : ''}
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-[150px] font-semibold text-xl text-slate-500'>
                    Nơi ở hiện tại
                  </div>
                  <div className='text-xl flex-1'>
                    {[
                      getWard(user?.ward)?.Name ?? '',
                      getDistrict(user?.district)?.Name ?? '',
                      getProvince(user?.province)?.Name ?? '',
                    ].join('-')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
