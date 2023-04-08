import React, { memo, useState, useCallback } from "react";
import Style from "./style";

import { useSong } from "@/store/useSong";
import { useIsShow } from "@/store/isShow";

import { HttpManager } from "@/api";

import cn from "classnames";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { ReactComponent as PlaylistIcon } from "assets/icons/playlist.svg";
import ProgressBar from "./ProgressBar";
import Artists from "@/components/Artists";
import AudioTimer from "./AudioTimer";
import PlayOperations from "./PlayOperations";
import PlayVolume from "./PlayVolume";
import LikeBtn from "@/components/LikeBtn";

const PlayBar = memo(() => {
  const attachImageUrl = HttpManager.attachImageUrl;
  //展示播放列表
  const [showPlayRecord, setShowPlayRecord] = useState(false);
  //获取store中的song状态
  const song: any = useSong();
  //是否展示歌词
  const isShow = useIsShow((state: any) => state.isShow);
  //更改展示状态
  const setIsShow = useIsShow((state: any) => state.setIsShow);

  //切换播放列表
  const togglePlayRecord = useCallback(() => {
    setShowPlayRecord(!showPlayRecord);
  }, [showPlayRecord]);
  //展示歌词
  const handleShowLyric = () => {
    setIsShow(true);
  };
  //隐藏歌词
  const handleHideLyric = () => {
    setIsShow(false);
  };
  return (
    <Style>
      <ProgressBar />
      <div className="progressBar">
        <div className="songWrap">
          {!!song.songId && (
            <React.Fragment>
              <div className={cn("pic", !isShow ? "showLyric" : "")}>
                <img
                  src={attachImageUrl(song?.songPic)}
                  loading="lazy"
                  alt=""
                  width="40px"
                  height="40px"
                />
                {!isShow && (
                  <div className="mask" onClick={handleShowLyric}>
                    {/* 展示歌词图标 */}
                    <UpOutlined />
                  </div>
                )}
                {isShow && (
                  <div
                    className={cn("mask", "hideLyric")}
                    onClick={handleHideLyric}
                  >
                    <DownOutlined />
                  </div>
                )}
              </div>
              <div>
                <div className="info">
                  <div className="name">{`${song?.songTitle || "--"} -`}</div>
                  <Artists artists={song} />
                </div>
                <div className="time">
                  <AudioTimer />
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="operations">
          <PlayOperations />
        </div>
        <div className="otherOperations">
          <div className="like">
            <LikeBtn></LikeBtn>
          </div>
          <div className="item">{/* <PlayMode /> */}</div>
          <div onClick={togglePlayRecord} className="item">
            <Tooltip title="打开播放列表">
              <PlaylistIcon
                width="20px"
                height="20px"
                className={showPlayRecord ? "active" : ""}
              />
            </Tooltip>
          </div>
          <div className="item">
            <PlayVolume />
          </div>
        </div>
      </div>
    </Style>
  );
});

export default PlayBar;
