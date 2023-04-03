import React, { memo, useEffect, useCallback, useState } from "react";
import Style from "./style";
import { useParams } from "react-router-dom";
import useAsyncFn from "@/hooks/useAsyncFn";
import { HttpManager } from "@/api";
import { useSong } from "@/store/useSong";
import Card from "@/components/Card";
import { Rate } from "antd";
import MusicList from "@/components/MusicList";
import Comment from "@/components/Comment";

const SongListDetail = memo(() => {
  const [rankList, rankListFn]: any = useAsyncFn(
    HttpManager.getRankOfSongListId
  );
  const [listSongOfSongId, listSongOfSongIdFn] = useAsyncFn(
    HttpManager.getListSongOfSongId
  );
  //store
  const song: any = useSong();
  //路由参数
  const { id } = useParams();
  //收集歌单中歌的列表
  const [currentSongList, setCurrentSongList]: any = useState([]);

  //如果本地有拿本地的
  const songDetailStr = localStorage.getItem("songDetail") || "";
  console.log(songDetailStr);

  const songDetails = song.songDetails
    ? song.songDetails
    : JSON.parse(songDetailStr);
  //获取图片url方法
  const attachImageUrl = HttpManager.attachImageUrl;
  // 收集歌单里面的歌曲
  async function getSongId(id: string) {
    const result: any = (await HttpManager.getListSongOfSongId(
      id
    )) as ResponseBody;

    // 获取歌单里的歌曲信息
    for (const item of result) {
      // 获取单里的歌曲
      const resultSong: any = (await HttpManager.getSongOfId(
        item.songId
      )) as ResponseBody;
      console.log(resultSong[0]);
      //同步更新
      setCurrentSongList((list: any) => [...list, resultSong[0]]);
    }
  }

  useEffect(() => {
    id && getSongId(id);
  }, []);
  useEffect(() => {
    //请求评分和歌曲id
    if (id) {
      rankListFn(id);
      listSongOfSongIdFn(id);
    }
  }, [id]);

  return (
    <Style>
      <div className="info">
        <Card
          img={attachImageUrl(songDetails.pic)}
          name={songDetails.title}
          width={300}
          height={300}
        ></Card>
      </div>
      <div className="detail">
        <h1>简介</h1>
        <p>{songDetails.introduction}</p>
        <div className="album-score">
          <div>
            <h3>歌单评分</h3>
            <Rate disabled allowHalf defaultValue={0} value={rankList?.value} />
          </div>
        </div>
        <span>{rankList.value * 2}</span>
        <div>
          <h3>评分</h3>
          <Rate allowHalf defaultValue={0} value={rankList?.value} />
        </div>
        <MusicList songlist={currentSongList} type={1}></MusicList>
        <div className="comments">
          <Comment playId={song?.songDetails?.id} type={1}></Comment>
        </div>
      </div>
    </Style>
  );
});

export default SongListDetail;
