import { DatePicker, Form, Input, Select } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction, useState } from 'react';

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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeInput = (callback: Dispatch<SetStateAction<string>>) => {
    return (e: any) => {
      callback(e.target.value);
    };
  };
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
              <div className='font-medium'>Số điện thoại</div>
              <Item name='name'>
                <Input size='large' maxLength={20} minLength={10} />
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
            <Item
              name='password'
              rules={[
                {
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    'Mật khẩu phải Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt',
                },
              ]}
            >
              <Input.Password
                size='large'
                value={password}
                onChange={onChangeInput(setPassword)}
              />
            </Item>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-medium'>Nhập lại mật khẩu</div>
            <Item name='confirmPassword'>
              <Input.Password
                size='large'
                value={confirmPassword}
                onChange={onChangeInput(setConfirmPassword)}
                prefix={
                  password && password === confirmPassword ? (
                    <CheckCircleOutlined
                      style={{
                        color: '#4BB543',
                      }}
                    />
                  ) : undefined
                }
              />
            </Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
