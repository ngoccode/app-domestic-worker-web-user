import RegisterForm from '../components/RegisterForm';

const UI = () => {
  return (
    <div className='flex w-full justify-center py-12'>
      <div className='w-2/3 bg-white rounded-xl shadow-xl'>
        <div className='pb-8 pt-2 px-8'>
          <div className='uppercase font-bold text-2xl mb-6 text-[#F47458]'>
            Đăng ký
          </div>
          <RegisterForm />
          <div className='flex items-center flex-col gap-12'>
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
  );
};

export default UI;
