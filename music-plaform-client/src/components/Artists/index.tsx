import React, { memo } from "react";
import Style from "./style";

const Artists = memo(({ artists }: any) => {
  return (
    <Style>
      {/* {artists?.map(({ name }: any, index: number) =>
        index !== artists?.length - 1 ? (
          <div key={name}>
            <span className="singer">{name}</span>
            <span className="slash">/</span>
          </div>
        ) : (
          <span key={name} className="singer">
            {name}
          </span>
        )
      )} */}
      {/* //单个歌手的情况 */}
      <span className="singer">{artists.singerName}</span>
    </Style>
  );
});

export default Artists;
