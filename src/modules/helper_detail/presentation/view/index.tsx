import { Avatar, Button, Rate } from 'antd';
import Icon from 'components/Icon/Icon';
import ModalContract from '../components/ModalContract';
import Comment from './Comment';

const UI = () => {
  return (
    <>
      <ModalContract open={true} />
      <div className='flex justify-center'>
        <div className='w-2/3 py-8 flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
              <div className='mb-[-4px] cursor-pointer hover:opacity-80'>
                <Icon icon='keyboard_arrow_left' color='#1E3050' size='large' />
              </div>
              <div className='font-medium text-2xl'>Nguyễn Thị A</div>
            </div>
            <Button className='!rounded-full !px-6' type='primary' size='large'>
              Tạo hợp đồng
            </Button>
          </div>
          <div className='flex gap-12 items-center'>
            <div>
              <img
                src='https://s3-alpha-sig.figma.com/img/1e17/de58/1a0680a4680d65bbfd00cd6a08be4f26?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kk3SHojDEX4p9Fk7PtWUE2-ECjKTHOo-9LhwhpDKrXVv3HyeaeKonxRuk6pBwkMAcle-YXklvys4pej7MHfQLwDwzTfK2NKioWxyloZ6kkSOS9fUGRWG1VL18Re0es40PNUGHPsb29BJLCjT8Lut81r--4rSxaFe68yDKqOomdSMHroO21jKrwIhbQHU1JMXnfoeAfoVcV2mluHSHLWDLaA6nAIe9SubUnE-uVtwRsjrGpoOrXp6VIBKbRS1SosF~pmaTF2BBPptJXkZj6kF~ujEVZzAphYGLUG7SVcNX4rNUelgeYaAs--i9oxskHtSA-z~fvB83PBU0bAIJyl43g__'
                alt=''
                className='w-[224px] h-[224px] object-cover rounded-xl'
              />
            </div>
            <ul className='list-disc ps-6 text-lg flex flex-col gap-2'>
              <li>
                <span className='font-medium'>Quê quán:</span> Hưng Yên
              </li>
              <li>
                <span className='font-medium'>Năm sinh:</span> 1980
              </li>
              <li>
                <span className='font-medium'>Kinh nghiệm:</span> Chăm bé, chăm
                bà, Dọn dẹp nhà cửa, Nấu cơm
              </li>
              <li>
                <span className='font-medium'>Thời gian:</span> 7 năm
              </li>
              <li>
                <span className='font-medium'>Nơi làm việc mong muốn:</span> Nam
                Từ Liêm, Hà Nội
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-14 mt-12'>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>Ưu điểm</div>
              <ul className='list-disc ps-6 flex flex-col gap-1'>
                <li>Nhanh nhẹn, hoạt bát, sạch sẽ, chăm chỉ</li>
                <li>Có kinh nghiệm làm việc lâu năm</li>
                <li>Đảm nhận được nhiều việc trong nhà</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>
                Nhược điểm
              </div>
              <ul className='list-disc ps-6 flex flex-col gap-1'>
                <li>Chỉ làm việc ở Hà Nội</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>Tiểu sử</div>
              <div className='pl-2'>
                Là người quê Hưng Yên đang sinh sống và làm việc tại Hà Nội Gia
                đình có chồng làm bảo vệ, 2 đứa con đang đi làm tại Hà Nội
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[#5E6282] font-medium text-lg'>
                Kinh nghiệm làm việc
              </div>
              <ol className='list-decimal ps-6 flex flex-col gap-2'>
                <li>
                  <div className='font-medium'>
                    Đã từng làm giúp việc toàn thời gian cho một gia đình, công
                    việc bao gồm:
                  </div>
                  <ul className='list-disc ps-2 flex flex-col gap-1'>
                    <li>Nấu cơm - rửa dọn</li>
                    <li>Dọn dẹp nhà cửa</li>
                    <li> Chăm người già</li>
                    <li>Đi chợ</li>
                  </ul>
                </li>
                <li>
                  <div className='font-medium'>
                    Trông em bé cho một cặp vợ chồng đi làm ( Làm từ 7h - 18h )
                  </div>
                  <ul className='list-disc ps-2 flex flex-col gap-1'>
                    <li>Trông trẻ</li>
                    <li>Ru ngủ</li>
                    <li>Nấu ăn</li>
                    <li>Cho em bé ăn</li>
                    <li>Đưa đón trẻ đến trường</li>
                  </ul>
                </li>
              </ol>
            </div>
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
