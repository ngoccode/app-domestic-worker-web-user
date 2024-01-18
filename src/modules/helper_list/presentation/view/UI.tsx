import { Carousel, Empty, Pagination, Rate } from 'antd';
import Filter from './Filter';
import { useHelperListContext } from '../context';
import { useAddress } from 'hooks/address';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const url =
  'data:image/png;base64,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';

const UI = () => {
  const { pagination, onChangePagination, data, dataRecommend } =
    useHelperListContext();
  const { getProvince } = useAddress();
  const navigate = useNavigate();

  const getLinkImage = (url: string) => {
    if (!url) return '';
    return `${process.env.REACT_APP_BASE_URL}/image/${url}`;
  };

  const onClickDetail = (row: any) => {
    return () => navigate(`/app-helper-detail/${row.user_id}`);
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
                          getLinkImage(item.profile_picture) || url
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
                      <Rate value={4} />
                      <div className='text-xs'>55 lượt đánh giá</div>
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
        {dataRecommend?.length > 0 && (
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
                                getLinkImage(item.profile_picture) || url
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
                            <Rate value={4} />
                            <div className='text-xs'>55 lượt đánh giá</div>
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
