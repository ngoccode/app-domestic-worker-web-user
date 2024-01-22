import { BASE_IMG } from 'constance';
import { useContractDetailContext } from '../context';
import { Avatar, Button, Input, Rate } from 'antd';
import { EditOutlined, SendOutlined } from '@ant-design/icons';
import { useAddress } from 'hooks/address';
import dayjs from 'dayjs';
import { CONTRACT_STATUS } from 'constance/contract';
import ModalContract from '../components/ModalContract';

const UI = () => {
  const {
    detail,
    onOpen,
    onClickComplete,
    onChangeRate,
    onChangeReview,
    saveReview,
  } = useContractDetailContext();
  const { getDistrict, getProvince, getWard } = useAddress();
  const getLinkImage = (url: string) => {
    if (!url) return '';
    return `${process.env.REACT_APP_BASE_URL}/image/${url}`;
  };

  return (
    <>
      <ModalContract />
      <div className='flex justify-center py-6'>
        <div className='w-2/3'>
          <div className='flex justify-end mb-6 gap-4'>
            {detail?.contract_status === 'complete' ? (
              <>
                <Button size='large' onClick={onClickComplete}>
                  Xác nhận hoàn thành
                </Button>
                <Button
                  icon={<EditOutlined />}
                  type='primary'
                  size='large'
                  onClick={onOpen}
                >
                  Chỉnh sửa hợp đồng
                </Button>
              </>
            ) : null}
          </div>
          <div className='flex gap-12'>
            <div>
              <img
                src={getLinkImage(detail?.helper?.profile_picture) || BASE_IMG}
                alt=''
                className='w-[224px] h-[224px] object-cover rounded-xl'
              />
            </div>
            <div className='flex-1'>
              <div className='flex font-semibold text-lg mb-4'>
                <div className='mr-4'>ID hợp đông:</div>
                <div>HD0001</div>
              </div>
              <div className='flex  gap-32'>
                <div className='flex flex-col gap-4'>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>Quê quán:</div>
                    <div>{`${getWard(detail?.helper?.ward)?.Name ?? ''}-${
                      getDistrict(detail?.helper?.district)?.Name ?? ''
                    }-${
                      getProvince(detail?.helper?.province)?.Name ?? ''
                    }`}</div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>
                      Ngày tháng năm sinh:
                    </div>
                    <div>
                      {dayjs(detail?.helper?.date_of_birth).format(
                        'DD/MM/YYYY'
                      )}
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>
                      Thời gian kinh nghiệm:
                    </div>
                    <div>{detail?.helper?.profile?.experience ?? 0} năm</div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>
                      Ngày tạo hợp đồng:
                    </div>
                    <div>{dayjs(detail?.created_at).format('DD/MM/YYYY')}</div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>Trạng thái:</div>
                    <div>{CONTRACT_STATUS[detail?.contract_status]}</div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>
                      Người tạo hợp đồng:
                    </div>
                    <div>{detail?.user?.full_name}</div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>
                      Ngày tháng năm sinh:
                    </div>
                    <div>
                      {dayjs(detail?.user?.date_of_birth).format('DD/MM/YYYY')}
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>
                      Thời gian hợp đồng:
                    </div>
                    <div>{dayjs(detail?.time_end).format('DD/MM/YYYY')}</div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>Mức lương:</div>
                    <div>{detail?.salary?.toLocaleString('en-US')}</div>
                  </div>
                  <div className='flex'>
                    <div className='w-[200px] font-medium'>Nơi làm việc:</div>
                    <div>{`${getWard(detail?.ward)?.Name ?? ''}-${
                      getDistrict(detail?.district)?.Name ?? ''
                    }-${getProvince(detail?.province)?.Name ?? ''}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t mt-32 py-4 flex flex-col gap-4 '>
            <div className='font-semibold text-xl text-slate-500 '>
              Đánh giá
            </div>
            {!detail?.helper?.review || detail?.helper?.review?.length === 0 ? (
              <>
                <Rate className='size-large' onChange={onChangeRate} />
                <div className='flex gap-2 items-start'>
                  <Input.TextArea
                    autoSize={{
                      minRows: 3,
                    }}
                    onChange={onChangeReview}
                  />
                  <div
                    className='mt-1 hover:opacity-80 cursor-pointer'
                    onClick={saveReview}
                  >
                    <SendOutlined className='text-2xl text-[#ff5b22]' />
                  </div>
                </div>
              </>
            ) : (
              <div className='rounded-xl shadow-md w-full p-6 flex gap-3 border'>
                <Avatar
                  size='large'
                  src={
                    getLinkImage(
                      detail?.helper?.review?.[0]?.user?.profile_picture
                    ) || BASE_IMG
                  }
                >
                  A
                </Avatar>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>
                    {detail?.helper?.review?.[0]?.user?.full_name || 'User'}
                  </div>
                  <Rate value={detail?.helper?.review?.[0]?.rating} disabled />
                  <div className='text-[#666] text-sm'>
                    {dayjs(detail?.helper?.review?.[0]?.created_at).format(
                      'hh:mm DD/MM/YYYY'
                    )}
                  </div>
                  <div className='text-sm mt-4'>
                    {detail?.helper?.review?.[0]?.comment}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
