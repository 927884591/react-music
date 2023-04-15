import React, { memo } from "react";
import Style from "./style";
import { useSong } from "@/store/useSong";
const Aside = memo(() => {
  const song: any = useSong();
  console.log(song);
  const toPlay = (item: any, index: number) => {
    console.log(item);
    song?.playMusic({
      id: item.id,
      url: item.url,
      pic: item.pic,
      index: index,
      singerName: item.singerName,
      songTitle: item.songName,
      lyric: item.lyric,
      currentSongList: song?.currentPlayList,
    });
  };
  return (
    <Style>
      <h2 className="title">当前播放列表</h2>
      <div className="list-info">共{song?.currentPlayList?.length || 0}首</div>

      <ul className="menus">
        {song?.currentPlayList?.map((item: any, index: number) => (
          <li className="item" onDoubleClick={() => toPlay(item, index)}>
            {item.songName}
          </li>
        ))}
      </ul>
    </Style>
  );
});

export default Aside;
