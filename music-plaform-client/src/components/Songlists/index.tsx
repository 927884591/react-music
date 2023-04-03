import React, { memo, useEffect } from "react";
import Style from "./style";
import { ISongList } from "@/types/songList";
import Card from "@/components/Card";
interface IProps {
  data: ISongList[];
}
const SongLists = memo((props: IProps) => {
  const { data } = props;
  //删除10个以后的
  data && data?.splice(10);
  return (
    <Style>
      {data?.map((item, index: number) => {
        return (
          <Card
            key={item.id}
            img={`${import.meta.env.VITE_NODE_HOST}/${item.pic}`}
            name={item.title}
            showPlayIcon
            id={item.id}
            data={item}
            type={1}
          ></Card>
        );
      })}
    </Style>
  );
});

export default SongLists;
