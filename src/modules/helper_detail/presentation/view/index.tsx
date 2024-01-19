import { Avatar, Button, Rate } from 'antd';
import Icon from 'components/Icon/Icon';
import ModalContract from '../components/ModalContract';
import Comment from './Comment';
import { useHelperDetailContext } from '../context';
import { BASE_IMG } from 'constance';
import { useAddress } from 'hooks/address';
import dayjs from 'dayjs';

const UI = () => {
  const { detail, open, onOpen } = useHelperDetailContext();
  const { getDistrict, getProvince, getWard } = useAddress();

  const getLinkImage = (url: string) => {
    if (!url) return '';
    return `${process.env.REACT_APP_BASE_URL}/image/${url}`;
  };

  return (
    <>
      <ModalContract />
      <div className='flex justify-center'>
        <div className='w-2/3 py-8 flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
              <div className='mb-[-4px] cursor-pointer hover:opacity-80'>
                <Icon icon='keyboard_arrow_left' color='#1E3050' size='large' />
              </div>
              <div className='font-medium text-2xl uppercase'>
                {detail?.full_name ?? ''}
              </div>
            </div>
            {detail?.contract ? null : (
              <Button
                className='!rounded-full !px-6'
                type='primary'
                size='large'
                onClick={onOpen}
              >
                Tạo hợp đồng
              </Button>
            )}
          </div>
          <div className='flex gap-12 items-center'>
            <div>
              <img
                src={getLinkImage(detail?.profile_picture) || BASE_IMG}
                alt=''
                className='w-[224px] h-[224px] object-cover rounded-xl'
              />
            </div>
            <ul className='list-disc ps-6 text-lg flex flex-col gap-2'>
              <li>
                <span className='font-medium'>Quê quán:</span>{' '}
                {`${getWard(detail?.ward)?.Name ?? ''}-${
                  getDistrict(detail?.district)?.Name ?? ''
                }-${getProvince(detail?.province)?.Name ?? ''}`}
              </li>
              <li>
                <span className='font-medium'>Năm sinh:</span>{' '}
                {detail?.date_of_birth
                  ? dayjs(detail?.date_of_birth).format('YYYY')
                  : ''}
              </li>
              <li>
                <span className='font-medium'>Kinh nghiệm:</span>{' '}
                {detail?.categories?.map((ele: any) => ele.name)?.join(', ')}
              </li>
              <li>
                <span className='font-medium'>Thời gian làm việc:</span>{' '}
                {detail?.profile?.experience} năm
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-14 mt-12'>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>Ưu điểm</div>
              <ul className='list-disc ps-6 flex flex-col gap-1'>
                <li>{detail?.profile?.advantage}</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>
                Nhược điểm
              </div>
              <ul className='list-disc ps-6 flex flex-col gap-1'>
                <li>{detail?.profile?.defect}</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>Tiểu sử</div>
              <div className='pl-2'>{detail?.profile?.biography}</div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>
                Kinh nghiệm làm việc
              </div>
              <ul className='list-disc ps-6 flex flex-col gap-1'>
                <li>{detail?.profile?.detail_experience}</li>
              </ul>
              {/* <ol className='list-decimal ps-6 flex flex-col gap-2'>
                <li>
                  <div className='font-medium'>
                    Đã từng làm giúp việc toàn thời gian cho một gia đình, công
                    việc bao gồm:
                  </div>
                  <ul className='list-disc ps-2 flex flex-col gap-1'>
                    <li>Nấu cơm - rửa dọn</li>
                    <li>Dọn dẹp nhà cửa</li>
                    <li> Chăm người già</li>
                    <li>Đi chợ</li>
                  </ul>
                </li>
                <li>
                  <div className='font-medium'>
                    Trông em bé cho một cặp vợ chồng đi làm ( Làm từ 7h - 18h )
                  </div>
                  <ul className='list-disc ps-2 flex flex-col gap-1'>
                    <li>Trông trẻ</li>
                    <li>Ru ngủ</li>
                    <li>Nấu ăn</li>
                    <li>Cho em bé ăn</li>
                    <li>Đưa đón trẻ đến trường</li>
                  </ul>
                </li>
              </ol> */}
            </div>
            <Comment comment={detail?.review} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
