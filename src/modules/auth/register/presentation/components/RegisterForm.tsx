import { DatePicker, Form, Input, Select } from 'antd';

const { Item } = Form;

const OPTION_GENDER = [
  {
    label: 'Nam',
    value: 'male',
  },
  {
    label: 'Nữ',
    value: 'female',
  },
];

const options = [
  {
    label: 'option1',
    value: 'option1',
  },
];

const RegisterForm = () => {
  return (
    <div className='w-full'>
      <Form name='form-register'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-12'>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Họ và tên</div>
              <Item name='name'>
                <Input size='large' />
              </Item>
            </div>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Email</div>
              <Item name='name'>
                <Input size='large' />
              </Item>
            </div>
          </div>
          <div className='flex gap-12'>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Ngày sinh</div>
              <Item name='date'>
                <DatePicker size='large' className='!w-full' />
              </Item>
            </div>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Giới tính</div>
              <Item name='gender'>
                <Select size='large' options={OPTION_GENDER} />
              </Item>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nơi ở hiện tại</div>
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
            <div className='font-medium'>Mật khẩu</div>
            <Item name='password'>
              <Input.Password size='large' />
            </Item>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nhập lại mật khẩu</div>
            <Item name='confirmPassword'>
              <Input.Password size='large' />
            </Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
