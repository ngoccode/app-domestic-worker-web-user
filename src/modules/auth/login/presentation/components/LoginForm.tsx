import { Button, Form, Input } from 'antd';

const { Item } = Form;

const LoginForm = () => {
  return (
    <div className='w-full'>
      <Form name='form-login'>
        <Item name='username'>
          <Input size='large' placeholder='Email or Username' />
        </Item>
        <Item name='password'>
          <Input size='large' placeholder='Password' />
        </Item>
        <Item>
          <Button type='primary' size='large' className='w-full'>
            <span className='uppercase font-bold text-medium'>Login</span>
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default LoginForm;
