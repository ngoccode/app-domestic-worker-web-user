import Filter from './Filter';

const UI = () => {
    return (
        <div className='py-4 flex justify-center'>
            <div className='flex flex-col gap-5 w-2/3'>
                <Filter />
                <div className='flex flex-col gap-4'>
                    <div className='font-bold color text-slate-600'>
                        Gợi ý cho bạn
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UI;
