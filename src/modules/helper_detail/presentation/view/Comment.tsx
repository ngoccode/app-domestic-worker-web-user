import { Avatar, Empty, Rate } from 'antd';
import { BASE_IMG } from 'constance';
import dayjs from 'dayjs';

const Comment = ({ comment }: any) => {
  const getLinkImage = (url: string) => {
    if (!url) return '';
    return `${process.env.REACT_APP_BASE_URL}/image/${url}`;
  };
  return (
    <div className='flex flex-col gap-4 border-t py-6'>
      <div className='text-[#5E6282] font-medium text-lg'>Đánh giá</div>
      <div className='flex flex-col gap-4'>
        {comment?.length > 0 ? (
          comment.map((item: any) => (
            <div
              className='rounded-xl shadow-md w-full p-6 flex gap-3 border'
              key={item.review_id}
            >
              <Avatar
                size='large'
                src={getLinkImage(item.user?.profile_picture) || BASE_IMG}
              >
                A
              </Avatar>
              <div className='flex flex-col gap-1'>
                <div className='font-medium'>{item?.user?.full_name}</div>
                <Rate value={item.rating} disabled />
                <div className='text-[#666] text-sm'>
                  {dayjs(item.created_at).format('hh:mm DD/MM/YYYY')}
                </div>
                <div className='text-sm mt-4'>{item.comment}</div>
              </div>
            </div>
          ))
        ) : (
          <Empty
            description='Không có đánh giá nào'
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
