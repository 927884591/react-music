import React, { memo } from "react";
import { Switch, Tabs } from "antd";
import type { TabsProps } from "antd";
import Children from "./Children";
import Style from "./style";
const items: TabsProps["items"] = [
  {
    key: "1",
    label: `全部歌手`,
    children: <Children type={`-1`}></Children>,
  },
  {
    key: "2",
    label: `男歌手`,
    children: <Children type={`1`}></Children>,
  },
  {
    key: "3",
    label: `女歌手`,
    children: <Children type={`0`}></Children>,
  },
  {
    key: "4",
    label: `组合歌手`,
    children: <Children type={`2`}></Children>,
  },
];
const Singers = memo(() => {
  const onChange = () => {};
  return (
    <Style>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Style>
  );
});

export default Singers;
