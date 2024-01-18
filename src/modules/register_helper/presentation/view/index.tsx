import { Button, DatePicker, Form, Input, Select, Upload } from 'antd';
import RegisterSuccess from './RegisterSuccess';
import { useRegisterHelperContext } from '../context';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useMapAddress } from 'modules/auth/register/presentation/hooks/useMapAddress';

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

const optionYear: any[] = [];

for (let i = 0; i <= 50; i = i + 0.5) {
  optionYear.push({
    label: `${i} năm`,
    value: i,
  });
}

const UI = () => {
  const {
    options,
    registerSuccess,
    form,
    province,
    districts,
    wards,
    onChangeForm,
    loading,
    imageUrl,
    onChangeFile,
    onCreateUser,
  } = useRegisterHelperContext();
  const { optionsAddress } = useMapAddress();

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <div className=' justify-center w-full flex h-full'>
      {!registerSuccess ? (
        <div className='w-2/3 py-12'>
          <div className='w-full flex justify-center text-2xl font-semibold text-[#FF852C]'>
            Đăng ký trở thành người giúp việc
          </div>
          <div className='mt-12'>
            <div className='font-medium text-lg text-[#FF852C] mb-8'>
              Thông tin cơ bản
            </div>
            <Form
              name='register-helper'
              form={form}
              onFinish={onCreateUser}
              onValuesChange={onChangeForm}
            >
              <div className='flex flex-col gap-3'>
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
                  <div className='font-medium'>Họ và tên</div>
                  <Item
                    name='full_name'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tên người dùng!',
                      },
                    ]}
                  >
                    <Input size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Ngày tháng năm sinh</div>
                  <Item name='date_of_birth'>
                    <DatePicker
                      size='large'
                      className='!w-full'
                      placeholder=''
                    />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Số điện thoại</div>
                  <Item
                    name='phone_number'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền số điện thoại!',
                      },
                    ]}
                  >
                    <Input size='large' />
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
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Hình thức làm việc</div>
                  <Item name='working_form'>
                    <Select size='large' options={OPTION_WORKING} />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Thời gian kinh nghiệm</div>
                  <Item name='experience'>
                    <Select size='large' options={optionYear} />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Kinh nghiệm làm việc</div>
                  <Item name='categories'>
                    <Select
                      options={options}
                      placeholder='Việc cần làm'
                      className='!w-full'
                      size='large'
                      mode='multiple'
                    />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Tiểu sử</div>
                  <Item name='biography'>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Ưu điểm</div>
                  <Item name='advantage'>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Nhược điểm</div>
                  <Item name='defect'>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-medium'>Chi tiết kinh nghiệm</div>
                  <Item name='detail_experience'>
                    <Input.TextArea autoSize={{ minRows: 4 }} size='large' />
                  </Item>
                </div>
                {/* <div>
                  <Button
                    type='primary'
                    size='large'
                    className='!rounded-full !px-4'
                  >
                    <div className='flex items-center'>
                      <Icon icon='add' color='#fff' />
                      Thêm kinh nghiệm
                    </div>
                  </Button>
                </div> */}

                <div className='flex justify-center mt-12'>
                  <Button
                    type='primary'
                    size='large'
                    htmlType='submit'
                    className='!font-medium !h-[50px] !px-6'
                  >
                    Đăng ký
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        <RegisterSuccess />
      )}
    </div>
  );
};
export default UI;
