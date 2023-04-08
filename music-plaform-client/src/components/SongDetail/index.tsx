import React, { memo } from "react";
import Style from "./style";
import { useSong } from "@/store/useSong";

import Lyric from "./Lyric";

import { HttpManager } from "@/api";

//导入素材
import playBar from "@/assets/play-bar.png";
import playCd from "@/assets/play-cd.png";

import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { useIsShow } from "@/store/isShow";
import Comment from "../Comment";
const SongDetail = memo(() => {
  const { attachImageUrl } = HttpManager;
  const [isPlay, songPic, songTitle, singerName, songId] = useSong(
    (state: any) => [
      state.isPlay,
      state.songPic,
      state.songTitle,
      state.singerName,
      state.songId,
    ]
  );
  const isShow = useIsShow((state: any) => state.isShow);
  console.log(isShow);

  return (
    <Style style={{ top: isShow && "0" }}>
      {isShow && (
        <div className="music">
          <div className="cdWrap">
            <div className="cd">
              <div className="bar">
                <CSSTransition
                  in={!isPlay}
                  classNames="play"
                  addEndListener={() => ""}
                  appear
                >
                  <img src={playBar} className={cn("playBar")} alt="" />
                </CSSTransition>

                <img src={playCd} className="playCd" alt="" />
              </div>
              <div className="circle">
                <div className={cn("cover", isPlay && "rotate")}>
                  <img
                    src={attachImageUrl(songPic)}
                    alt=""
                    width="190px"
                    height="190px"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="right">
            <div className="lyric">
              <div className="name">{songTitle}</div>
              <div className="artists">
                歌手：
                <span>{singerName}</span>
              </div>
              <div className="lrc">
                <Lyric />
              </div>
            </div>
            <div className="comments">
              <Comment type={0} playId={songId}></Comment>
            </div>
          </div>
        </div>
      )}
    </Style>
  );
});

export default SongDetail;
