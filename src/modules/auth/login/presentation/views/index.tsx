import { Button, Checkbox, Form, Input } from 'antd';
import LoginImg from '../../../../../assets/icons/login-img.svg';

const { Item } = Form;

const UI = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4 flex items-center gap-10'>
        <div className='w-1/2 rounded-2xl shadow-lg bg-white mt-12 px-10 py-16'>
          <div className='text-[#F47458] font-bold text-3xl mb-12'>
            Đăng nhập
          </div>
          <Form>
            <div className='flex flex-col gap-1 mb-4'>
              <div>Email hoặc Số điệnt thoại</div>
              <Item>
                <Input size='large' />
              </Item>
            </div>
            <div className='flex flex-col gap-1 mb-1'>
              <div className='flex justify-between'>
                <div>Mật khẩu</div>
                <div className='text-[#808080] text-xs hover:underline cursor-pointer'>
                  Quên mật khẩu
                </div>
              </div>
              <Item>
                <Input.Password size='large' />
              </Item>
            </div>

            <div className='mb-10'>
              <Item>
                <Checkbox />
                <span className='ml-2'>Nhớ mật khẩu</span>
              </Item>
            </div>

            <div className='flex justify-center'>
              <Button
                type='primary'
                className='!rounded-full !w-1/3'
                size='large'
                htmlType='submit'
              >
                Đăng nhập
              </Button>
            </div>
            <div className='flex justify-center mt-6 text-[#00000033]'>
              Bạn chưa có tài khoản?
              <span className='text-[#F47458] ml-1 hover:underline cursor-pointer'>
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
