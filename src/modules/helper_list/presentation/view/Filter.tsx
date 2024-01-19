import { Button, Form, Select } from 'antd';
import { useHelperListContext } from '../context';
import { useMapAddress } from 'modules/auth/register/presentation/hooks/useMapAddress';

const { Item } = Form;

const OPTION_WORKING = [
  {
    label: 'Toàn thời gian',
    value: 'full_time',
  },
  {
    label: 'Bán thời gian',
    value: 'past_time',
  },
];

const optionYear: any[] = [];

for (let i = 0; i <= 50; i = i + 0.5) {
  optionYear.push({
    label: `${i} năm`,
    value: i,
  });
}

const Filter = () => {
  const { province, districts, wards, options, onChangeFilter, onFilter } =
    useHelperListContext();
  const { optionsAddress } = useMapAddress();
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-center'>
        Bạn có nhu cầu tìm kiếm như thế nào? Hãy cho chúng tôi biết
      </div>
      <Form
        name='helper-list-filter'
        onValuesChange={onChangeFilter}
        onFinish={onFilter}
      >
        <div className='flex flex-col gap-5'>
          <div className='flex gap-3 w-full items-center'>
            <div className='min-w-[150px] font-semibold'>Địa chỉ của bạn</div>
            <div className='flex gap-3 w-full'>
              <Item name='province' className='!w-1/3'>
                <Select
                  options={optionsAddress(province)}
                  placeholder='Tỉnh hoặc thành phố'
                  className='!w-full'
                  size='large'
                />
              </Item>
              <Item name='district' className='!w-1/3'>
                <Select
                  options={optionsAddress(districts)}
                  placeholder='Huyện hoặc quận'
                  className='!w-full'
                  size='large'
                />
              </Item>
              <Item name='ward' className='!w-1/3'>
                <Select
                  options={optionsAddress(wards)}
                  placeholder='Xã phường'
                  className='!w-full'
                  size='large'
                />
              </Item>
            </div>
          </div>
          <div className='flex gap-3 w-full items-center'>
            <div className='w-[150px] min-w-[150px] font-semibold'>
              Bạn muốn tìm người giúp việc gì
            </div>
            <Item name='category' className='!w-full'>
              <Select
                options={options}
                mode='multiple'
                size='large'
                className='!w-full'
              />
            </Item>
          </div>
          <div className='flex gap-3 w-full'>
            <div className='w-1/2 items-center flex gap-3'>
              <div className='w-[150px] min-w-[150px] font-semibold'>
                Hình thức làm việc
              </div>
              <Item name='working_form' className='!w-full'>
                <Select
                  options={OPTION_WORKING}
                  size='large'
                  className='!w-full'
                />
              </Item>
            </div>
            <div className='w-1/2 flex items-center'>
              <div className='w-[150px] min-w-[150px] font-semibold text-center'>
                Kinh nghiệm
              </div>
              <Item name='experience' className='!w-full'>
                <Select options={optionYear} size='large' className='!w-full' />
              </Item>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button
              size='large'
              type='primary'
              className='!rounded-full !w-32'
              htmlType='submit'
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
