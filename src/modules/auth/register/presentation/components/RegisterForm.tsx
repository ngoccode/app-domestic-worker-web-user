import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const { Item } = Form;

const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const onChangeForm = (value: any) => {
    if ('password' in value) setPassword(value.password);
  };
  return (
    <div className='w-full'>
      <Form name='form-register' onValuesChange={onChangeForm}>
        <Item name='username'>
          <Input size='large' placeholder='Username' />
        </Item>
        <Item name='email'>
          <Input size='large' placeholder='Email' />
        </Item>
        <Item name='password'>
          <Input size='large' placeholder='Password' />
        </Item>
        {password ? (
          <Item name='confirm-password'>
            <Input size='large' placeholder='Confirm Password' />
          </Item>
        ) : (
          false
        )}
        <Item>
          <Button type='primary' size='large' className='w-full'>
            <span className='uppercase font-bold text-medium'>Register</span>
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
