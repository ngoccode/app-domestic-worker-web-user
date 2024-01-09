import { Button, Form, Select } from 'antd';

const { Item } = Form;

const options = [
  {
    label: 'option1',
    value: 'option1',
  },
];

const Filter = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-center'>
        Bạn có nhu cầu tìm kiếm như thế nào? Hãy cho chúng tôi biết
      </div>
      <Form name='helper-list-filter'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-3 w-full items-center'>
            <div className='min-w-[150px] font-semibold'>Địa chỉ của bạn</div>
            <div className='flex gap-3 w-full'>
              <Item name={['address', 'province']} className='!w-1/3'>
                <Select
                  options={options}
                  placeholder='Tỉnh hoặc thành phố'
                  className='!w-full'
                  size='large'
                />
              </Item>
              <Item name={['address', 'district']} className='!w-1/3'>
                <Select
                  options={options}
                  placeholder='Huyện hoặc quận'
                  className='!w-full'
                  size='large'
                />
              </Item>
              <Item name={['address', 'ward']} className='!w-1/3'>
                <Select
                  options={options}
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
            <Item name='helper' className='!w-full'>
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
              <Item name='type' className='!w-full'>
                <Select options={options} size='large' className='!w-full' />
              </Item>
            </div>
            <div className='w-1/2 flex items-center'>
              <div className='w-[150px] min-w-[150px] font-semibold text-center'>
                Kinh nghiệm
              </div>
              <Item name='level' className='!w-full'>
                <Select options={options} size='large' className='!w-full' />
              </Item>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button size='large' type='primary' className='!rounded-full !w-32'>
              Tìm kiếm
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
