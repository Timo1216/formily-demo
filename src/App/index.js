import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import * as ICONS from '@ant-design/icons'
import VerifyCode from './VerifyCode';

// form 实例
const form = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name])
    },
  },
})
export default function App(props) {
  return <div>
    <h2>hello form</h2>
    <Form form={form} layout="vertical">
      <SchemaField>
        <SchemaField.String 
          name="username"
          title="用户名"
          required
          x-decorator="FormItem"
          x-component="Input"
          x-component-props={{
            prefix: "{{icon('UserOutlined')}}",
          }}
          />
          <SchemaField.String 
            name="password"
            title="密码"
            required
            x-decorator="FormItem"
            x-component="Input"
            x-component-props={{
              prefix: "{{icon('LockOutlined')}}",
            }}
          />
          <SchemaField.String 
            name="cpassword"
            title="自定义密码"
            required
            x-decorator="FormItem"
            x-component="VerifyCode"
            x-component-props={{
              prefix: "{{icon('LockOutlined')}}",
            }}
          />
      </SchemaField>
      <Submit block size="large">
        登录
      </Submit>
    </Form>
  </div>;
}
