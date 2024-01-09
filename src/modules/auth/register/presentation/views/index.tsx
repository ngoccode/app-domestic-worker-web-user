import Wrapper from 'components/wrapper';
import RegisterForm from '../components/RegisterForm';
import { Button } from 'antd';

const UI = () => {
  return (
    <Wrapper>
      <div className='flex w-full justify-center py-24'>
        <div className='w-2/3 bg-white rounded-xl shadow-xl'>
          <div className='py-12 px-8'>
            <div className='uppercase font-bold text-2xl mb-6 text-[#F47458]'>
              Đăng ký
            </div>
            <RegisterForm />
            <div className='mt-24 flex items-center flex-col gap-12'>
              <Button
                className='!rounded-full w-[180px]'
                size='large'
                type='primary'
              >
                Đăng ký
              </Button>
              <div className='text-[#00000033]'>
                Bạn đã có tài khoản?{' '}
                <span className='text-[#F47458] cursor-pointer hover:underline'>
                  Đăng nhập
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UI;
