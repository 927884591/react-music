import React, { memo } from "react";

import Style from "./style";

import Header from "@/layout/Header";
import Content from "@/layout/Content";
import Footer from "@/layout/Footer";
import PlayBar from "./PlayBar";
import SongDetail from "@/components/SongDetail";
import { useSong } from "@/store/useSong";
import { message } from "antd";
const Layout = memo(() => {
  const [messageApi, contextHolder] = message.useMessage();
  const songId = useSong((state: any) => state.songId);
  return (
    <Style>
      {contextHolder}
      <Header></Header>
      <Content></Content>
      <PlayBar></PlayBar>
      {/* 如果没有歌的话就不会展示 */}
      {songId && <SongDetail></SongDetail>}
    </Style>
  );
});

export default Layout;
