import { Modal, Form, Input, Select, Button, DatePicker } from 'antd';
import { useContractDetailContext } from '../context';
import { useMapAddress } from 'hooks/useMapAddress';

const { Item } = Form;

const OPTION_WORKING = [
  {
    label: 'Toàn thời gian',
    value: 'full_time',
  },
  {
    label: 'Bán thời gian',
    value: 'past_time',
  },
];

const ModalContract = () => {
  const {
    open,
    province,
    districts,
    options,
    wards,
    onClose,
    onChangeFilter,
    onUpdate,
    form,
  } = useContractDetailContext();
  const { optionsAddress } = useMapAddress();
  return (
    <Modal
      width={'55%'}
      open={open}
      title={null}
      closeIcon={null}
      footer={null}
      onCancel={onClose}
    >
      <div className='px-6 py-2'>
        <div className='font-medium text-[#FF852C] text-xl mb-8'>
          Thông tin hợp đồng
        </div>
        <Form
          name='contract'
          onValuesChange={onChangeFilter}
          onFinish={onUpdate}
          form={form}
        >
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Mức lương</div>
              <Item name='salary'>
                <Input size='large' type='number' />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Địa chỉ làm việc</div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                  <Item name='province' className='!w-1/3'>
                    <Select
                      options={optionsAddress(province)}
                      placeholder='Tỉnh hoặc thành phố'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                  <Item name='district' className='!w-1/3'>
                    <Select
                      options={optionsAddress(districts)}
                      placeholder='Huyện hoặc quận'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                  <Item name='ward' className='!w-1/3'>
                    <Select
                      options={optionsAddress(wards)}
                      placeholder='Xã phường'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                </div>
                <Item name='address'>
                  <Input size='large' placeholder='Địa chỉ chi tiết' />
                </Item>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Thời gian kết thúc</div>
              <Item name='time_end'>
                <DatePicker size='large' className='!w-full' placeholder='' />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Hình thức làm việc</div>
              <Item name='working_form'>
                <Select
                  options={OPTION_WORKING}
                  placeholder=''
                  className='!w-full'
                  size='large'
                />
              </Item>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Việc cần làm</div>
              <Item name='categories'>
                <Select
                  options={options}
                  placeholder=''
                  className='!w-full'
                  size='large'
                  mode='multiple'
                />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Việc cần làm</div>
              <Item name='description'>
                <Input.TextArea size='large' autoSize={{ minRows: 3 }} />
              </Item>
            </div>
            <div className='flex justify-end gap-3 mt-4'>
              <Button
                size='large'
                type='primary'
                htmlType='submit'
                className='!px-8 !rounded-full'
              >
                Gửi
              </Button>
              <Button
                size='large'
                className='!px-6 !rounded-full'
                onClick={onClose}
              >
                Thoát
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalContract;
