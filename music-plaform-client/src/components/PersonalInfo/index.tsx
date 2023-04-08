import React, { memo, useState } from "react";
import Style from "./style";
import { AREA } from "@/helpers/area";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  DatePicker,
  Cascader,
  message,
} from "antd";
import { useUser } from "@/store/useUser";
import { getBirth } from "@/helpers/getBirth";
import { HttpManager } from "@/api";
import type { RadioChangeEvent, DatePickerProps } from "antd";
import { useNavigate } from "react-router-dom";

const PersonalInfo = memo(() => {
  const [userId, setUsername] = useUser((state: any) => [
    state.userId,
    state.setUsername,
  ]);
  const navigate = useNavigate();
  const [sex, setSex] = useState(2);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = async (values: any) => {
    console.log(values);
    const params = new URLSearchParams();
    params.append("id", userId);
    params.append("username", values.user.username);
    params.append("sex", values.user.sex);
    params.append("phone_num", values.user.phoneNum);
    params.append("email", values.user.email);
    params.append("birth", getBirth(values.user.birth.$d));
    params.append("introduction", values.user.introduction);
    params.append("location", values.user.location);

    const result = (await HttpManager.updateUserMsg(params)) as ResponseBody;
    message.success(result.message);
    if (result.success) {
      setUsername(values.user.username);
      navigate(-1);
    }
  };
  //更改性别
  const onChangeSex = (e: RadioChangeEvent) => {
    setSex(e.target.value);
  };
  //生日表单触发
  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  //更改地区
  const onChangeArea: any = (value: string[]) => {
    console.log(value);
  };
  //更改手机号
  const onChangePhone = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };
  return (
    <Style>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "username"]}
          label="用户名"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "sex"]}
          label="性别"
          rules={[{ required: true }]}
        >
          <Radio.Group onChange={onChangeSex} value={sex}>
            <Radio value={1}>男</Radio>
            <Radio value={0}>女</Radio>
            <Radio value={2}>保密</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={["user", "birth"]}
          label="生日"
          rules={[{ required: true }]}
        >
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="个性签名">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["user", "location"]}
          label="地区"
          rules={[{ required: true }]}
        >
          <Cascader
            options={AREA}
            onChange={onChangeArea}
            placeholder="请选择地区"
          />
        </Form.Item>
        <Form.Item
          name={["user", "phoneNum"]}
          label="手机"
          rules={[{ required: true }]}
        >
          <Input showCount maxLength={20} onChange={onChangePhone} />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="邮箱"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Style>
  );
});

export default PersonalInfo;
