import React from "react";
import { useRoutes } from "react-router-dom";
import { router } from "@/router";
import Audio from "@/components/Audio";
import { message } from "antd";
import Style from "./style";
const Content = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <Style>
      {contextHolder}
      {useRoutes(router)}
      <Audio></Audio>
    </Style>
  );
};

export default Content;
