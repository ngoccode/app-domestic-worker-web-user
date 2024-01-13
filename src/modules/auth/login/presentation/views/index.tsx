import { Button, Form, Input } from 'antd';
import LoginImg from '../../../../../assets/icons/login-img.svg';
import { useLoginContext } from '../context';
import { useNavigate } from 'react-router-dom';

const { Item } = Form;

const UI = () => {
  const { form, onConfirmLogin } = useLoginContext();
  const navigate = useNavigate();
  // const { token } = useGetToken();

  // useEffect(() => {
  //   if (token) navigate('/');
  // }, [token]);

  const onChangeRegister = () => {
    navigate('/app-register');
  };
  return (
    <div className='flex justify-center'>
      <div className='w-3/4 flex items-center gap-10'>
        <div className='w-1/2 rounded-2xl shadow-lg bg-white mt-8 px-10 py-16'>
          <div className='text-[#F47458] font-bold text-3xl mb-12'>
            Đăng nhập
          </div>
          <Form name='login' onFinish={onConfirmLogin} form={form}>
            <div className='flex flex-col gap-1 mb-4'>
              <div>Số điệnt thoại</div>
              <Item
                name='phoneNumber'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại',
                  },
                ]}
              >
                <Input size='large' maxLength={20} />
              </Item>
            </div>
            <div className='flex flex-col gap-1 mb-1'>
              <div className='flex justify-between'>
                <div>Mật khẩu</div>
                <div className='text-[#808080] text-xs hover:underline cursor-pointer'>
                  Quên mật khẩu
                </div>
              </div>
              <Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu',
                  },
                ]}
              >
                <Input.Password size='large' />
              </Item>
            </div>

            {/* <div className='flex items-center'>
              <Item name='remember' valuePropName='checked'>
                <Checkbox />
              </Item>
              <span className='ml-2'>Nhớ mật khẩu</span>
            </div> */}

            <div className='flex justify-center mt-10'>
              <Button
                type='primary'
                className='!rounded-full !px-6'
                size='large'
                htmlType='submit'
              >
                Đăng nhập
              </Button>
            </div>
            <div className='flex justify-center mt-6 text-[#00000033]'>
              Bạn chưa có tài khoản?
              <span
                className='text-[#F47458] ml-1 hover:underline cursor-pointer'
                onClick={onChangeRegister}
              >
                Đăng ký
              </span>
            </div>
          </Form>
        </div>
        <div className='w-1/2'>
          <img src={LoginImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default UI;
