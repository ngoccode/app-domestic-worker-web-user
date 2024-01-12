import { ReactNode, useEffect, useState } from 'react';

const Spinner = ({
  children,
  spinning,
}: {
  children?: ReactNode;
  spinning?: boolean;
}) => {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    if (spinning) setSpin(true);
    else setSpin(false);
  }, [spinning]);

  return (
    <div className={`h-full ${spin ? 'relative h-full' : ''}`}>
      {children}
      {spin && (
        <div className='absolute inset-0 z-50 flex justify-center items-center bg-white/30'>
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#FF5B22] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          >
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spinner;
