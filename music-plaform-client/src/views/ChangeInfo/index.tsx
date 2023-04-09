import React, { memo } from "react";
import { Tabs, TabsProps } from "antd";
import PersonalInfo from "@/components/PersonalInfo";
import AccountSafe from "@/components/AccountSafe";
import ChangePw from "@/components/ChangePw";
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
    children: <ChangePw></ChangePw>,
  },
  {
    label: `账号和安全`,
    key: 3,
    children: <AccountSafe></AccountSafe>,
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
