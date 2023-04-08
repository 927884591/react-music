import React, { memo } from "react";
import { Tabs, TabsProps } from "antd";
import PersonalInfo from "@/components/PersonalInfo";
import Style from "./style";
const items: any = [
  {
    label: `个人资料`,
    key: 1,
    children: <PersonalInfo></PersonalInfo>,
  },
  {
    label: `更改密码`,
    key: 2,
    children: `Content of tab 2`,
  },
  {
    label: `账号和安全`,
    key: 3,
    children: `Content of tab 3`,
  },
];
const ChangeInfor = memo(() => {
  return (
    <Style>
      <h1 className="title">个人信息修改</h1>
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{ height: 220 }}
        items={items}
      />
    </Style>
  );
});

export default ChangeInfor;
