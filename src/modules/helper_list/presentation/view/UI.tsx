import { Carousel, Empty, Pagination, Rate } from 'antd';
import Filter from './Filter';
import { useHelperListContext } from '../context';
import { useAddress } from 'hooks/address';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { BASE_IMG } from 'constance';
import { useGetUser } from 'config/hooks/useGetUser';

const UI = () => {
  const { pagination, onChangePagination, data, dataRecommend } =
    useHelperListContext();
  const { user } = useGetUser();
  const { getProvince } = useAddress();
  const navigate = useNavigate();

  const getLinkImage = (url: string) => {
    if (!url) return '';
    return `${process.env.REACT_APP_BASE_URL}/image/${url}`;
  };

  const onClickDetail = (row: any) => {
    return () => navigate(`/app-helper-detail/${row.user_id}`);
  };

  const countRate = (arr: any[]) => {
    if (!arr) return 0;
    return arr.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0);
  };
  return (
    <div className='py-8 flex justify-center'>
      <div className='flex flex-col gap-5 w-2/3'>
        <Filter />

        {data?.length > 0 ? (
          <>
            <div className='flex flex-wrap gap-16 mt-8'>
              {data.map((item: any) => {
                return (
                  <div
                    className='w-[calc((100%-4rem*3)/4)] flex flex-col gap-2 hover:cursor-pointer'
                    key={item.user_id}
                    onClick={onClickDetail(item)}
                  >
                    <div
                      className='w-full pt-[100%]  bg-red-200 bg-center rounded-t-xl hover:scale-110 transition-all'
                      style={{
                        backgroundImage: `url(${
                          getLinkImage(item.profile_picture) || BASE_IMG
                        })`,
                      }}
                    />
                    <div className='font-medium'>{item.full_name}</div>
                    <ul className='list-disc ps-6'>
                      <li className='text-sm'>
                        Quê quán: {getProvince(item.province)?.Name}
                      </li>
                      <li className='text-sm'>
                        Năm sinh: {dayjs(item.date_of_birth).format('YYYY')}
                      </li>
                      <li className='text-sm'>
                        Kinh nghiệm:{' '}
                        {item.categories
                          ?.map((item: any) => item.name)
                          ?.join(', ')}
                      </li>
                      <li className='text-sm'>
                        Thời gian: {item.profile?.experience ?? 0} năm
                      </li>
                    </ul>
                    <div className='flex items-center justify-between mt-2'>
                      {item?.review?.length > 0 ? (
                        <>
                          <Rate value={countRate(item?.review)} />
                          <div className='text-xs'>
                            {item?.review?.length} lượt đánh giá
                          </div>
                        </>
                      ) : (
                        <div className='text-xs'>Chưa có đánh giá</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='flex justify-end py-6'>
              <Pagination
                pageSize={pagination.size}
                current={pagination.page}
                total={pagination.total}
                onChange={onChangePagination}
              />
            </div>
          </>
        ) : (
          <div className='py-12'>
            <Empty description='Không tìm thấy người giúp việc' />
          </div>
        )}
        {dataRecommend?.length > 0 && user && (
          <div className='flex flex-col gap-4 mb-24'>
            <div className='font-bold color text-slate-600'>Gợi ý cho bạn</div>
            <Carousel autoplay>
              {dataRecommend?.map((ele: any, index: number) => (
                <div key={index}>
                  <div className='flex gap-16'>
                    {ele.map((item: any) => {
                      return (
                        <div
                          className='w-[calc((100%-4rem*3)/4)] flex flex-col gap-2 hover:cursor-pointer'
                          key={item.user_id}
                          onClick={onClickDetail(item)}
                        >
                          <div
                            className='w-full pt-[100%]  bg-red-200 bg-center rounded-t-xl hover:scale-110 transition-all'
                            style={{
                              backgroundImage: `url(${
                                getLinkImage(item.profile_picture) || BASE_IMG
                              })`,
                            }}
                          />
                          <div className='font-medium'>{item.full_name}</div>
                          <ul className='list-disc ps-6'>
                            <li className='text-sm'>
                              Quê quán: {getProvince(item.province)?.Name}
                            </li>
                            <li className='text-sm'>
                              Năm sinh:{' '}
                              {dayjs(item.date_of_birth).format('YYYY')}
                            </li>
                            <li className='text-sm'>
                              Kinh nghiệm:{' '}
                              {item.categories
                                ?.map((item: any) => item.name)
                                ?.join(', ')}
                            </li>
                            <li className='text-sm'>
                              Thời gian: {item.profile?.experience ?? 0} năm
                            </li>
                          </ul>
                          <div className='flex items-center justify-between mt-2'>
                            {item?.review?.length > 0 ? (
                              <>
                                <Rate value={countRate(item?.review)} />
                                <div className='text-xs'>
                                  {item?.review?.length} lượt đánh giá
                                </div>
                              </>
                            ) : (
                              <div className='text-xs'>Chưa có đánh giá</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default UI;
