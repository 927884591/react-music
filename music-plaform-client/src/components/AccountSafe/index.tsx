import React, { memo, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Style from "./style";
import { Modal, Button, message } from "antd";
import { HttpManager } from "@/api";
import { useUser } from "@/store/useUser";
import { useConfigure } from "@/store/configure";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "@/constants/router";
const AccountSafe = memo(() => {
  const navigate = useNavigate();
  const [userId] = useUser((state: any) => [state.userId]);
  const [setToken] = useConfigure((state: any) => [state.setToken]);
  const [modal, contextHolder] = Modal.useModal();
  const onOk = async () => {
    const result = (await HttpManager.deleteUser(userId)) as ResponseBody;
    //提示信息
    message.success(result.message);
    //跳转路由
    navigate(LOGIN);
    //退出登录操作
    setToken(false);
    localStorage.setItem("user", "");
  };
  const confirm = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "确认注销账号？",
      okText: "确认",
      cancelText: "取消",
      onOk: onOk,
    });
  };
  return (
    <Style>
      {contextHolder}
      <Button onClick={confirm} danger>
        注销账号
      </Button>
    </Style>
  );
});

export default AccountSafe;
