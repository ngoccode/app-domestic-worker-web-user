import { Button, DatePicker, Form, Input, Select } from 'antd';
import Icon from 'components/Icon/Icon';
import RegisterSuccess from './RegisterSuccess';

const { Item } = Form;
const options = [
  {
    label: 'option1',
    value: 'option1',
  },
];

const UI = () => {
  return (
    <div className=' justify-center w-full h-full'>
      {false ? (
        <div className='w-2/3 py-12'>
          <div className='w-full flex justify-center text-2xl font-semibold text-[#FF852C]'>
            Đăng ký trở thành người giúp việc
          </div>
          <div className='mt-12'>
            <div className='font-medium text-lg text-[#FF852C] mb-8'>
              Thông tin cơ bản
            </div>
            <Form name='register-helper'>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Họ và tên</div>
                  <Item>
                    <Input size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Ngày tháng năm sinh</div>
                  <Item>
                    <DatePicker size='large' className='!w-full' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Số điện thoại</div>
                  <Item>
                    <Input size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Email</div>
                  <Item>
                    <Input size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Quê quán</div>
                  <div className='flex gap-3'>
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
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Địa chỉ mong muốn làm việc</div>
                  <div className='flex gap-3'>
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
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Hình thức làm việc</div>
                  <Item>
                    <Select
                      options={options}
                      placeholder='Xã phường'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Thời gian kinh nghiệm</div>
                  <Item>
                    <Select
                      options={options}
                      placeholder='Xã phường'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Kinh nghiệm làm việc</div>
                  <Item>
                    <Select
                      options={options}
                      placeholder='Xã phường'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Tiểu sử</div>
                  <Item>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Ưu điểm</div>
                  <Item>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Nhược điểm</div>
                  <Item>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Chi tiết kinh nghiệm 1</div>
                  <Item>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div>
                  <Button
                    type='primary'
                    size='large'
                    className='!rounded-full !px-4'
                  >
                    <div className='flex items-center'>
                      <Icon icon='add' color='#fff' />
                      Thêm kinh nghiệm
                    </div>
                  </Button>
                </div>

                <div className='flex justify-center mt-12'>
                  <Button
                    type='primary'
                    size='large'
                    className='!font-medium !h-[50px] !px-6'
                  >
                    Đăng ký
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        <RegisterSuccess />
      )}
    </div>
  );
};
export default UI;
