import { Modal, Form, Input, Select, Button } from 'antd';

const { Item } = Form;

type ModalContractProps = {
  open?: boolean;
};

const options = [
  {
    label: 'option1',
    value: 'option1',
  },
];

const ModalContract = ({ open = false }: ModalContractProps) => {
  const onCancel = () => {
    open = false;
  };
  return (
    <Modal
      width={'55%'}
      open={open}
      title={null}
      closeIcon={null}
      footer={null}
      onCancel={onCancel}
    >
      <div className='px-6 py-2'>
        <div className='font-medium text-[#FF852C] text-lg mb-8'>
          Thông tin hợp đồng
        </div>
        <Form name='contract'>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Mức lương đề xuất</div>
              <Item>
                <Input size='large' />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Địa chỉ làm việc</div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                  <Item name={['address', 'province']} className='!w-1/3'>
                    <Select
                      options={options}
                      placeholder='Tỉnh hoặc thành phố'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                  <Item name={['address', 'district']} className='!w-1/3'>
                    <Select
                      options={options}
                      placeholder='Huyện hoặc quận'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                  <Item name={['address', 'ward']} className='!w-1/3'>
                    <Select
                      options={options}
                      placeholder='Xã phường'
                      className='!w-full'
                      size='large'
                    />
                  </Item>
                </div>
                <Item>
                  <Input size='large' placeholder='Địa chỉ chi tiết' />
                </Item>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Hình thức làm việc</div>
              <Item>
                <Select
                  options={options}
                  placeholder='Xã phường'
                  className='!w-full'
                  size='large'
                />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Việc cần làm</div>
              <Item>
                <Select
                  options={options}
                  placeholder='Xã phường'
                  className='!w-full'
                  size='large'
                />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Việc cần làm</div>
              <Item>
                <Input.TextArea size='large' autoSize={{ minRows: 3 }} />
              </Item>
            </div>
            <div className='flex justify-end gap-3 mt-4'>
              <Button
                size='large'
                type='primary'
                className='!px-8 !rounded-full'
              >
                Gửi
              </Button>
              <Button size='large' className='!px-6 !rounded-full'>
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
