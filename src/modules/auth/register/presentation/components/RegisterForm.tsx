import { Button, DatePicker, Form, Input, Select } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRegisterContext } from '../context';
import { useMapAddress } from '../hooks/useMapAddress';

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
  const { form, province, districts, wards, onChangeForm, onSubmitForm } =
    useRegisterContext();
  const { optionsAddress } = useMapAddress();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeInput = (callback: Dispatch<SetStateAction<string>>) => {
    return (e: any) => {
      callback(e.target.value);
    };
  };
  return (
    <div className='w-full'>
      <Form
        name='form-register'
        form={form}
        onValuesChange={onChangeForm}
        onFinish={onSubmitForm}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex gap-12'>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Họ và tên</div>
              <Item
                name='name'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ và tên',
                  },
                ]}
              >
                <Input size='large' />
              </Item>
            </div>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Số điện thoại</div>
              <Item
                name='phoneNumber'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại',
                  },
                ]}
              >
                <Input size='large' maxLength={20} minLength={10} />
              </Item>
            </div>
          </div>
          <div className='flex gap-12'>
            <div className='flex flex-col w-1/2 gap-1'>
              <div className='font-medium'>Ngày sinh</div>
              <Item name='dateOfBirth'>
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
              <Item name={'province'} className='!w-1/3'>
                <Select
                  options={optionsAddress(province)}
                  placeholder='Tỉnh hoặc thành phố'
                  className='!w-full'
                  size='large'
                  showSearch
                  optionFilterProp='label'
                  filterOption={(input, option) =>
                    option?.label
                      ?.toLowerCase()
                      .indexOf(input?.trim().toLowerCase()) >= 0
                  }
                />
              </Item>
              <Item name={'district'} className='!w-1/3'>
                <Select
                  options={optionsAddress(districts)}
                  placeholder='Huyện hoặc quận'
                  className='!w-full'
                  size='large'
                  showSearch
                  optionFilterProp='label'
                  filterOption={(input, option) =>
                    option?.label
                      ?.toLowerCase()
                      .indexOf(input?.trim().toLowerCase()) >= 0
                  }
                />
              </Item>
              <Item name={'ward'} className='!w-1/3'>
                <Select
                  options={optionsAddress(wards)}
                  placeholder='Xã phường'
                  className='!w-full'
                  size='large'
                  showSearch
                  optionFilterProp='label'
                  filterOption={(input, option) =>
                    option?.label
                      ?.toLowerCase()
                      .indexOf(input?.trim().toLowerCase()) >= 0
                  }
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
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
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
            <Item
              name='confirmPassword'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập lại mật khẩu',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('Nhập lại mật khẩu chưa chính xác!')
                    );
                  },
                }),
              ]}
            >
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
          <div className='flex justify-center py-12'>
            <Button
              className='!rounded-full w-[180px]'
              size='large'
              type='primary'
              htmlType='submit'
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
