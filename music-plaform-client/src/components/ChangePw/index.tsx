import React, { memo } from "react";
import Style from "./style";
import { Form, Input, Button, message } from "antd";
import { useUser } from "@/store/useUser";
import { useNavigate } from "react-router-dom";
import { HttpManager } from "@/api";
const ChangePw = memo(() => {
  const [userId, username] = useUser((state: any) => [
    state.userId,
    state.username,
  ]);
  const navigate = useNavigate();
  //提交表单触发方法
  const onFinish = async (values: any) => {
    console.log(values);
    const params = new URLSearchParams();
    params.append("id", userId);
    params.append("username", username);
    params.append("old_password", values.user.oldPassword);
    params.append("password", values.user.newPassword);

    const result = (await HttpManager.updateUserPassword(
      params
    )) as ResponseBody;
    message.success(result.message);
    if (result.success) navigate(-1);
  };
  return (
    <Style>
      <Form onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item
          name={["user", "oldPassword"]}
          label="旧密码"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={["user", "newPassword"]}
          label="新密码"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={["user", "password1"]}
          label="确认新密码"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </Style>
  );
});

export default ChangePw;
