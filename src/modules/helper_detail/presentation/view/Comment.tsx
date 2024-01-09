import { Avatar, Rate } from 'antd';

const Comment = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-[#5E6282] font-medium text-lg'>Đánh giá</div>
      <div className='flex flex-col gap-4'>
        <div className='rounded-xl shadow-md w-full p-6 flex gap-3 border'>
          <Avatar size='large'>A</Avatar>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nguyễn yến Ngọc</div>
            <Rate value={4} />
            <div className='text-[#666] text-sm'>13:09 22/10/2023</div>
            <div className='text-sm mt-4'>
              Cô giúp việc nhanh nhẹn, sạch sẽ, rất quý trẻ con
            </div>
          </div>
        </div>
        <div className='rounded-xl shadow-md w-full p-6 flex gap-3 border'>
          <Avatar size='large'>A</Avatar>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nguyễn yến Ngọc</div>
            <Rate value={4} />
            <div className='text-[#666] text-sm'>13:09 22/10/2023</div>
            <div className='text-sm mt-4'>
              Cô giúp việc nhanh nhẹn, sạch sẽ, rất quý trẻ con
            </div>
          </div>
        </div>
        <div className='rounded-xl shadow-md w-full p-6 flex gap-3 border'>
          <Avatar size='large'>A</Avatar>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nguyễn yến Ngọc</div>
            <Rate value={4} />
            <div className='text-[#666] text-sm'>13:09 22/10/2023</div>
            <div className='text-sm mt-4'>
              Cô giúp việc nhanh nhẹn, sạch sẽ, rất quý trẻ con
            </div>
          </div>
        </div>
        <div className='rounded-xl shadow-md w-full p-6 flex gap-3 border'>
          <Avatar size='large'>A</Avatar>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nguyễn yến Ngọc</div>
            <Rate value={4} />
            <div className='text-[#666] text-sm'>13:09 22/10/2023</div>
            <div className='text-sm mt-4'>
              Cô giúp việc nhanh nhẹn, sạch sẽ, rất quý trẻ con
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;