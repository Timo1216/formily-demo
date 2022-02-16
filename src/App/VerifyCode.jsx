import React from 'react';
import { Input } from 'antd';

export default function VerifyCode(props) {
  const { value, onChange, ...restProps } = props;
  return <div>
    <Input onChange={onChange} value={value} />
    <p>密码：{value}</p>
  </div>;
}
