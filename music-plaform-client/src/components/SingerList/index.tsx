import React, { memo, useEffect } from "react";
import Style from "./style";
import { ISongList } from "@/types/songList";
import Card from "@/components/Card";
interface IProps {
  data: ISongList[];
}
const SongLists = memo((props: any) => {
  const { data } = props;

  //删除10个以后的
  data && data?.splice(10);
  return (
    <Style>
      {data?.map((item: any, index: number) => {
        return (
          <Card
            key={item.id}
            img={`${import.meta.env.VITE_NODE_HOST}/${item.pic}`}
            name={item.name}
            showPlayIcon
            id={item.id}
            data={item}
            //type 2是歌手
            type={2}
          ></Card>
        );
      })}
    </Style>
  );
});

export default SongLists;
