import { useSong } from "@/store/useSong";
import React, { memo, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { parseLyric } from "@/utils";
import Style from "./style";

const Lyric = memo(() => {
  const [lyric, currentPlayList, currentPlayIndex, songId, curTime] = useSong(
    (state: any) => [
      state.lyric,
      state.currentPlayList,
      state.currentPlayIndex,
      state.songId,
      state.curTime,
    ]
  );

  const [lyricTop, setLyric]: any = useState("20px");
  //解析歌词
  const [lyricArr, setLyricArr] = useState([]);
  //当歌曲改变时更换歌词
  useEffect(() => {
    const arr: any = parseLyric(currentPlayList[currentPlayIndex].lyric);
    setLyricArr(arr);
  }, [songId]);
  // 处理歌词位置及颜色
  useEffect(() => {
    if (lyricArr.length !== 0) {
      for (let i = 0; i < lyricArr.length; i++) {
        if (curTime >= lyricArr[i][0]) {
          for (let j = 0; j < lyricArr.length; j++) {
            (
              document.querySelectorAll(
                ".has-lyric li"
              ) as NodeListOf<HTMLElement>
            )[j].style.color = "#c5c5c5";
            (
              document.querySelectorAll(
                ".has-lyric li"
              ) as NodeListOf<HTMLElement>
            )[j].style.fontSize = "14px";
          }
          if (i >= 0) {
            setLyric(-i * 40 + 45 + "px");
            (
              document.querySelectorAll(
                ".has-lyric li"
              ) as NodeListOf<HTMLElement>
            )[i].style.color = "#3b3f42";
            (
              document.querySelectorAll(
                ".has-lyric li"
              ) as NodeListOf<HTMLElement>
            )[i].style.fontSize = "18px";
          }
        }
      }
    }
  }, [curTime]);
  return (
    <Style>
      <div
        className="song-lyric"
        style={{ position: "relative", top: lyricTop }}
      >
        <TransitionGroup>
          {lyricArr.length ? (
            <ul className="has-lyric">
              {lyricArr.map((item, index) => (
                <CSSTransition classNames="lyric-fade" timeout={500}>
                  <li className="lyric-item" key={index}>
                    {item[1]}
                  </li>
                </CSSTransition>
              ))}
            </ul>
          ) : (
            <div v-else className="no-lyric" key="no-lyric">
              <span>暂无歌词</span>
            </div>
          )}
        </TransitionGroup>
      </div>
    </Style>
  );
});

export default Lyric;
