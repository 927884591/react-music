import React, { memo, useCallback, useEffect, useState } from "react";
import Style from "./style";
import { useSong } from "@/store/useSong";

import { ReactComponent as PauseIcon } from "assets/icons/pause.svg";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PreviousIcon } from "assets/icons/previous.svg";
import { ReactComponent as NextIcon } from "assets/icons/next.svg";
import { ReactComponent as Shunxu } from "assets/icons/shunxu.svg";
import { ReactComponent as Suiji } from "assets/icons/suiji.svg";
import { ReactComponent as DanQuXunHuan } from "assets/icons/danquxunhuan.svg";

const PlayOperations = memo(() => {
  const [index, setIndex] = useState(0);
  //拿到store的状态
  const [
    songUrl,
    currentPlayList,
    songId,
    playMusic,
    isPlay,
    setIsPlay,
    currentPlayIndex,
    setCurrentPlayIndex,
    autoNext,
    playBtnIcon,
    setPlayBtnIcon,
  ] = useSong((state: any) => [
    state.songUrl,
    state.currentPlayList,
    state.songId,
    state.playMusic,
    state.isPlay,
    state.setIsPlay,
    state.currentPlayIndex,
    state.setCurrentPlayIndex,
    state.autoNext,
    state.playBtnIcon,
    state.setPlayBtnIcon,
  ]);
  useEffect(() => {
    if (autoNext && songUrl) next();
  }, [autoNext]);
  // 开始 / 暂停
  useSong.subscribe((state: any) => {
    // console.log(state.currentPlayIndex);
    setIndex((index) => state.currentPlayIndex);
  });
  useEffect(() => {
    toPlay(currentPlayList[index]?.url);
  }, [index]);

  const togglePlay = () => {
    !isPlay ? setIsPlay(true) : setIsPlay(false);
  };
  const next = () => {
    //随机
    if (playBtnIcon === "suiji") {
      let playIndex = Math.floor(Math.random() * currentPlayList.length);
      // playIndex = playIndex === currentPlayIndex ? playIndex + 1 : playIndex;
      console.log("playIndex" + playIndex);

      setIndex(() => playIndex);
      setCurrentPlayIndex(playIndex);

      console.log("currentPlayIndex" + index);

      toPlay(currentPlayList[playIndex].url);
      //单曲
    } else if (playBtnIcon === "danquxunhuan") {
      toPlay(currentPlayList[currentPlayIndex].url);
      //顺序和顺序播放的编辑判断
    } else if (currentPlayIndex !== -1 && currentPlayList.length >= 0) {
      if (currentPlayIndex < currentPlayList.length) {
        //如果列表中到最后了，就回到第一个重新播放
        setCurrentPlayIndex(currentPlayIndex + 1);
        console.log(index);
        // toPlay(currentPlayList[index].url);
      } else {
        setCurrentPlayIndex(0);
        toPlay(currentPlayList[0].url);
      }
    }
  };
  const pre = () => {
    //如果列表中到最前面了，就回到最后一个重新播放
    if (currentPlayIndex > 0) {
      setCurrentPlayIndex(currentPlayIndex - 1);
      // toPlay(currentPlayList[index].url);
    } else {
      setCurrentPlayIndex(currentPlayList.length - 1);
      toPlay(currentPlayList[currentPlayList.length - 1].url);
    }
  };
  //触发播放方法
  const toPlay = (url: string) => {
    console.log(222222);

    console.log(url, songUrl, currentPlayIndex);
    if (url && url !== songUrl) {
      const song = currentPlayList[index];
      playMusic({
        id: song.id,
        url,
        pic: song.pic,
        index: index,
        name: song.name,
        lyric: song.lyric,
        singerName: song.singerName,
        songTitle: song.songName,
        currentSongList: currentPlayList,
      });
    }
  };
  //切换播放状态
  const changePlaystatus = () => {
    if (playBtnIcon === "shunxu") {
      setPlayBtnIcon("suiji");
    }
    if (playBtnIcon === "suiji") {
      setPlayBtnIcon("danquxunhuan");
    }
    if (playBtnIcon === "danquxunhuan") {
      setPlayBtnIcon("shunxu");
    }
  };
  return (
    <Style>
      <div className="icon" onClick={changePlaystatus}>
        {/* 切换模式 */}
        {playBtnIcon === "shunxu" ? (
          <Shunxu></Shunxu>
        ) : playBtnIcon === "suiji" ? (
          <Suiji></Suiji>
        ) : (
          <DanQuXunHuan></DanQuXunHuan>
        )}
      </div>
      <div className="prev" onClick={pre}>
        <PreviousIcon width="20px" />
      </div>
      <div className="pause" onClick={() => togglePlay()}>
        {!isPlay ? (
          <PlayIcon width="25px"></PlayIcon>
        ) : (
          <PauseIcon width="25px" />
        )}
      </div>
      <div className="next" onClick={next}>
        <NextIcon width="20px" />
      </div>
      <div className="empty"></div>
    </Style>
  );
});

export default PlayOperations;
