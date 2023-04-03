import React, { memo, useMemo } from "react";
import { formatTime } from "helpers/time";
import { useSong } from "@/store/useSong";
const AudioTimer = memo((props: any) => {
  const song: any = useSong();
  //取出time
  const time = useMemo(() => {
    return `${formatTime(song?.curTime * 1000)} / ${formatTime(
      song?.duration * 1000
    )}`;
  }, [song?.curTime, song?.duration]);
  return <div>{time}</div>;
});

export default AudioTimer;
