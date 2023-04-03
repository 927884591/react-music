import React, { memo, useCallback, useRef, useState, useEffect } from "react";

import AlbumItemStyle from "./style";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { CaretRightFilled } from "@ant-design/icons";
import { formatNum } from "helpers/num";

import { useNavigate } from "react-router-dom";
import { useSong } from "@/store/useSong";

import { SONGLISTDETAIL, SINGER } from "@/constants/router";

import cn from "classnames";

interface IPorps {
  img: string | undefined;
  name?: string | undefined;
  author?: string | undefined;
  width?: number;
  height?: number;
  borderRadius?: number;
  showPlayIcon?: boolean;
  playCount?: number;
  id?: number;
  showAnimation?: boolean;
  playlist?: any;
  data?: any;
  type?: number;
}
const Card: React.FC<IPorps> = memo((props: IPorps) => {
  const {
    img,
    name,
    author,
    width,
    height,
    borderRadius,
    showPlayIcon,
    playCount,
    showAnimation = true,
    id,
    playlist,
    data,
    type,
  } = props;
  const song: any = useSong();
  //监听图片是否加载完成,来做骨架屏
  const [loading, setLoading] = useState(false);
  //迫不得已使用window

  window.onload = () => {
    setLoading(true);
  };
  // //当图片加载完取消监听

  const navigate = useNavigate();
  const handleItemClick = useCallback(
    //type 1:歌单 2：歌手
    (id: number, autoPlay?: boolean) => {
      if (autoPlay) {
        navigate(`${SONGLISTDETAIL}/${id}`);
        return;
      }
      if (type === 1) navigate(`${SONGLISTDETAIL}/${id}`);
      if (type === 2) {
        navigate(`${SINGER}/${id}`);
      }
    },
    [navigate]
  );
  return (
    <AlbumItemStyle
      style={{
        width: width ? width + "px" : "200px",
      }}
      onClick={
        id
          ? () => {
              console.log(id);
              console.log(data);
              handleItemClick(id);
              localStorage.setItem("songDetail", JSON.stringify(data));
              song.setSongDetails(data);
            }
          : () => {}
      }
    >
      <div
        className={cn("img", showAnimation && "showAnimation")}
        style={{ width: width, height: height }}
      >
        <div
          className="shadow"
          style={{
            backgroundImage: `url(${img})`,
            borderRadius:
              width && borderRadius === width / 2
                ? "50px 50px 60px 60px"
                : "50px 50px 1em 1em",
          }}
        ></div>
        {playCount && (
          <div className="playCount">
            <CaretRightFilled style={{ fontSize: "16px" }}></CaretRightFilled>
            {formatNum(playCount)}
          </div>
        )}
        <img
          // 如果有值的话就给个默认值
          width={width ? width + "px" : "200px"}
          height={height ? height + "px" : "200px"}
          src={img}
          alt={name}
          style={{
            objectFit: "cover",
            borderRadius: borderRadius ? borderRadius + "px" : "10px",
          }}
          loading="lazy"
        />
        {showPlayIcon && (
          <div
            className="playButton"
            // 根据传过来的长度等比缩小放大
            style={{
              width: width && width / 3 + "px",
              height: height && height / 3 + "px",
              borderRadius: width && width / 4 + "px",
            }}
            // 播放所有点击*****
            onClick={() => {}}
          >
            <PlayIcon
              className="playIcon"
              // 根据传过来的长度等比缩小放大
              width={width ? width / 8 + "px" : 200 / 8 + "px"}
              height={height ? height / 8 + "px" : 200 / 8 + "px"}
            ></PlayIcon>
          </div>
        )}
      </div>

      {name && <div className="name">{name}</div>}
      {author && <div className="author">{author}</div>}
    </AlbumItemStyle>
  );
});

export default Card;
