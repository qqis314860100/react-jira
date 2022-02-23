import React from "react";
import { useAuth } from "context/auth-context";
import { Button, Form, Input } from "antd";
import { LongButton } from "unauthenticated";

function Login() {
  const { user, login } = useAuth();
  const handleLogin = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleLogin}>
      <Form.Item name="username">
        <Input type="text" placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password">
        <Input type="password" placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}

export default Login;
