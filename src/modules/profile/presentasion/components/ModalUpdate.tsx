import { Button, DatePicker, Form, Input, Modal, Select, Upload } from 'antd';
import { useProfileContext } from '../context';
import { PlusOutlined } from '@ant-design/icons';
import { useMapAddress } from 'hooks/useMapAddress';

const { Item } = Form;

const ModalUpdate = () => {
  const {
    open,
    form,
    imageUrl,
    province,
    districts,
    wards,
    onChangeForm,
    onUpdate,
    onChangeFile,
    onCancel,
  } = useProfileContext();
  const { optionsAddress } = useMapAddress();

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Modal width='60%' open={open} footer={null} closeIcon={null}>
      <div className='px-6 py-2'>
        <div className='font-medium text-[#FF852C] text-lg mb-8'>
          Thông tin người dùng
        </div>
        <Form
          name='contract'
          form={form}
          onValuesChange={onChangeForm}
          onFinish={onUpdate}
        >
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-col gap-1'>
              <Item name='profile_picture'>
                <Upload
                  name='avatar'
                  listType='picture-circle'
                  className='avatar-uploader'
                  showUploadList={false}
                  beforeUpload={() => false}
                  onChange={onChangeFile}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt='avatar'
                      className='w-full h-full object-cover rounded-full'
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Họ tên</div>
              <Item
                name='full_name'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên!',
                  },
                ]}
              >
                <Input size='large' maxLength={50} />
              </Item>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Email</div>
              <Item
                name='email'
                rules={[
                  {
                    pattern: new RegExp(/^\S+@\S+\.\S+$/),
                    message: 'Email không đúng định dạng',
                  },
                ]}
              >
                <Input size='large' />
              </Item>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Địa chỉ</div>
              <div className='flex gap-3'>
                <Item name={'province'} className='!w-1/3'>
                  <Select
                    options={optionsAddress(province)}
                    placeholder='Tỉnh hoặc thành phố'
                    className='!w-full'
                    size='large'
                    showSearch
                    optionFilterProp='label'
                    filterOption={(input, option) =>
                      option?.label
                        ?.toLowerCase()
                        .indexOf(input?.trim().toLowerCase()) >= 0
                    }
                  />
                </Item>
                <Item name={'district'} className='!w-1/3'>
                  <Select
                    options={optionsAddress(districts)}
                    placeholder='Huyện hoặc quận'
                    className='!w-full'
                    size='large'
                    showSearch
                    optionFilterProp='label'
                    filterOption={(input, option) =>
                      option?.label
                        ?.toLowerCase()
                        .indexOf(input?.trim().toLowerCase()) >= 0
                    }
                  />
                </Item>
                <Item name={'ward'} className='!w-1/3'>
                  <Select
                    options={optionsAddress(wards)}
                    placeholder='Xã phường'
                    className='!w-full'
                    size='large'
                    showSearch
                    optionFilterProp='label'
                    filterOption={(input, option) =>
                      option?.label
                        ?.toLowerCase()
                        .indexOf(input?.trim().toLowerCase()) >= 0
                    }
                  />
                </Item>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Ngày sinh</div>
              <Item name='date_of_birth'>
                <DatePicker
                  className='!w-full'
                  placeholder='Ngày sinh'
                  size='large'
                />
              </Item>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>Giới tính</div>
              <Item name='gender'>
                <Select
                  size='large'
                  options={[
                    {
                      label: 'Nam',
                      value: 'male',
                    },
                    {
                      label: 'Nữ',
                      value: 'female',
                    },
                  ]}
                />
              </Item>
            </div>

            <div className='flex justify-end gap-3 mt-4'>
              <Button
                size='large'
                type='primary'
                className='!px-8 !rounded-full'
                htmlType='submit'
              >
                Lưu
              </Button>
              <Button
                size='large'
                className='!px-6 !rounded-full'
                onClick={onCancel}
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

export default ModalUpdate;
