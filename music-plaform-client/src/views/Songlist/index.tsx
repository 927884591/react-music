import React, { memo, useEffect, useState } from "react";
import Style from "./style";
import { Switch, Tabs } from "antd";
import type { TabsProps } from "antd";
import Children from "./Children";

import { HttpManager } from "@/api";
import useAsyncFn from "hooks/useAsyncFn";

const Songlist = memo(() => {
  //当该改变时
  const onChange = (key: any) => {
    console.log(key);
  };
  const [playList, playListFn]: any = useAsyncFn(HttpManager.getSongList);
  //所有的歌单列表
  const [renderList, setRenderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //请求全部歌单
  useEffect(() => {
    playListFn();
  }, []);
  useEffect(() => {
    setRenderList(playList?.value);
  }, [playList]);
  //
  async function getSongListOfStyle(style: string) {
    const res = ((await HttpManager.getSongListOfStyle(style)) as ResponseBody)
      .data;
    setRenderList(res);
    setCurrentPage(1);
  }
  useEffect(() => {}, []);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `全部歌单`,
      children: <Children type={`全部歌单`}></Children>,
    },
    {
      key: "2",
      label: `华语`,
      children: <Children type={`华语`}></Children>,
    },
    {
      key: "3",
      label: `粤语`,
      children: <Children type={`粤语`}></Children>,
    },
    {
      key: "4",
      label: `欧美`,
      children: <Children type={`欧美`}></Children>,
    },
    {
      key: "5",
      label: `日韩`,
      children: <Children type={`日韩`}></Children>,
    },
    {
      key: "6",
      label: `轻音乐`,
      children: <Children type={`轻音乐`}></Children>,
    },
    {
      key: "7",
      label: `BGM`,
      children: <Children type={`BGM`}></Children>,
    },
    {
      key: "8",
      label: `乐器`,
      children: <Children type={`乐器`}></Children>,
    },
  ];
  return (
    <Style>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Style>
  );
});

export default Songlist;
