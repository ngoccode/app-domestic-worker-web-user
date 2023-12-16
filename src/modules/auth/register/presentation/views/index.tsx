import RegisterForm from '../components/RegisterForm';

const UI = () => {
  return (
    <div className='flex justify-center items-center bg-neutral-100 w-full h-screen'>
      <div className='w-[400px] bg-white rounded-xl shadow-xl'>
        <div className='py-12 px-8'>
          <div className='uppercase font-bold text-xl text-center mb-6'>
            Register
          </div>
          <RegisterForm />
          <div className='mt-4 flex justify-center'>
            <div className='text-cyan-500 cursor-pointer hover:opacity-80 ml-1 underline'>
              Signin now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
