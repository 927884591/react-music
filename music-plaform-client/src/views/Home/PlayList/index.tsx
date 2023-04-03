import React, { memo, useEffect } from "react";
import LinkTitle from "@/components/LinkTitle";
import { ISongList } from "@/types/songList";
import Style from "./style";
import { HttpManager } from "@/api";
import useAsyncFn from "hooks/useAsyncFn";
import SongLists from "@/components/Songlists";
const PlayList = memo(() => {
  const [playList, playListFn] = useAsyncFn(HttpManager.getSongList);
  const [singers, singersFn] = useAsyncFn(HttpManager.getAllSinger);

  useEffect(() => {
    playListFn();
    singersFn();
  }, []);
  useEffect(() => {}, [playList]);
  return (
    <Style>
      <LinkTitle title="推荐歌单" checkAll route="/songlist" />
      <SongLists data={playList?.value as ISongList[]}></SongLists>
    </Style>
  );
});

export default PlayList;
