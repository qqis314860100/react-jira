import React from "react";
import { useAuth } from "context/auth-context";
import { Button, Form, Input } from "antd";
import { LongButton } from "unauthenticated";
import { useAsync } from "hooks/useAsync";

function Login({ onError }: { onError: (error: Error) => void }) {
  const { user, login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(values));
    } catch (error) {
      onError(error as Error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
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
