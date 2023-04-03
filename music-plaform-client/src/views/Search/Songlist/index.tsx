import React, { memo, useEffect, useState } from "react";
import MusicList from "@/components/MusicList";
import useAsyncFn from "@/hooks/useAsyncFn";
import Style from "./style";
import { HttpManager } from "@/api";
interface IProps {
  keyword: string;
}
const Songlist = memo((props: IProps) => {
  const [list, setList] = useState([]);
  const [getSinger, getSingerFn]: any = useAsyncFn(
    HttpManager.getSongOfSingerName
  );
  const { keyword } = props;

  //请求歌曲列表
  useEffect(() => {
    getSingerFn(keyword);
  }, []);
  useEffect(() => {
    setList(getSinger?.value);
  }, [getSinger]);
  return (
    <Style>
      <MusicList songlist={list} type={1}></MusicList>
    </Style>
  );
});

export default Songlist;
