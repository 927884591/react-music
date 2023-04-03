import React, { memo, useRef, useEffect, useState } from "react";

import { HttpManager } from "@/api";

import { useSong } from "@/store/useSong";
const Audio = memo(() => {
  const song: any = useSong();

  const audioEl: any = useRef<HTMLAudioElement>();
  const attachImageUrl = HttpManager.attachImageUrl;
  //切换播放
  const togglePlay = () => {
    song?.isPlay ? audioEl.current.play() : audioEl.current.pause();
  };
  //获取歌曲链接后准备播放
  const canplay = () => {
    //  记录音乐时长
    song.setDuration(audioEl.current.duration);
    //  开始播放
    audioEl.current.play();

    song?.setIsPlay(true);
  };
  //当时间改变时，触发
  useEffect(() => {
    audioEl.current.currentTime = song?.changeTime;
  }, [song?.changeTime]);
  //当音量改变时触发
  useEffect(() => {
    audioEl.current.volume = song?.volume;
  }, [song?.volume]);
  useEffect(() => {
    togglePlay();
  }, [song?.isPlay]);
  // 音乐播放时记录音乐的播放位置
  const timeupdate = () => {
    song.setCurTime(audioEl.current.currentTime);
  };
  const ended = () => {
    song.setIsplay(false);
    song.setCurTime(0);
    song.setAutoNext(!song.autoNext);
  };
  return (
    <audio
      src={attachImageUrl(song.songUrl)}
      ref={audioEl}
      preload="true"
      controls
      onCanPlay={canplay}
      onTimeUpdate={timeupdate}
      onEnded={ended}
      style={{ display: "none" }}
    ></audio>
  );
});

export default Audio;
