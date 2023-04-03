import React, { memo, useEffect } from "react";
import LinkTitle from "@/components/LinkTitle";
import { ISongList } from "@/types/songList";
import Style from "./style";
import { HttpManager } from "@/api";
import useAsyncFn from "hooks/useAsyncFn";
import SingerList from "@/components/SingerList";
const PlayList = memo(() => {
  const [singers, singersFn] = useAsyncFn(HttpManager.getAllSinger);
  useEffect(() => {
    singersFn();
  }, []);
  useEffect(() => {}, [singers]);
  return (
    <Style>
      <LinkTitle title="推荐歌手" checkAll route="/singers" />
      <SingerList data={singers?.value}></SingerList>
    </Style>
  );
});

export default PlayList;
