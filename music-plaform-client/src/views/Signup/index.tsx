import React, { useState } from "react";
import { Form, Input, Button, Select, Radio, DatePicker, message } from "antd";
import { FormInstance } from "antd/lib/form";
import { formatDatetime } from "@/helpers/time";
import { HttpManager } from "@/api";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "@/constants/router";

const { Option } = Select;

type SignupFormValues = {
  username: string;
  password: string;
  sex: string;
  phone_num: string;
  email?: string;
  birth: any;
  introduction?: string;
  location?: string;
};

const SignupForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<SignupFormValues>();
  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async (values: SignupFormValues) => {
    console.log(values);
    setSubmitting(true);
    const params = new URLSearchParams();
    params.append("username", values.username);
    params.append("password", values.password);
    params.append("sex", values.sex);
    params.append("phone_num", values.phone_num || "");
    params.append("email", values.email || "");
    params.append("birth", formatDatetime(values.birth.$d));
    params.append("introduction", values.introduction || "");
    params.append("location", values.location || "");
    try {
      const result = (await HttpManager.SignUp(params)) as ResponseBody;
      message.success(result.message);
      if (result.success) {
        navigate(LOGIN);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form form={form} onFinish={handleSignup} layout="vertical">
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="性别"
        name="sex"
        rules={[{ required: true, message: "请选择性别" }]}
      >
        <Radio.Group>
          <Radio value={1}>男</Radio>
          <Radio value={0}>女</Radio>
          <Radio value={2}>保密</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="手机" name="phone_num">
        <Input />
      </Form.Item>
      <Form.Item label="邮箱" name="email">
        <Input />
      </Form.Item>
      <Form.Item
        label="生日"
        name="birth"
        rules={[{ required: true, message: "请选择生日" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="签名" name="introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="地区" name="location">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignupForm;
