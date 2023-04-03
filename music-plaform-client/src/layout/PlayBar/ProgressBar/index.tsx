import React, { memo, useMemo, useCallback } from "react";

//格式化时间工具
import { formatTime } from "helpers/time";
import { useSong } from "@/store/useSong";
import { ISongType } from "@/types/song";

import BaseProgressBar from "@/components/BaseProgressBar";

const ProgressBar = memo(() => {
  const [duration, curTime, setChangeTime] = useSong((state: any) => [
    state.duration,
    state.curTime,
    state.setChangeTime,
  ]);
  //
  const donePercent = useMemo(() => {
    return duration ? curTime / duration : 0;
  }, [curTime, duration]);
  //格式化音乐，并且传给antd的procgress组件
  const renderLabel = useCallback(() => {
    return formatTime(curTime);
  }, [curTime]);
  const handleBarClick = useCallback(
    (percent: any) => {
      console.log(6666666666, percent);
      let time = (duration || 0) * percent;
      time = Math.min(duration, Math.max(0, time));
      setChangeTime(time);
    },
    [duration]
  );
  return (
    <BaseProgressBar
      donePercent={donePercent}
      renderLabel={renderLabel}
      onBarClick={handleBarClick}
    />
  );
});

export default ProgressBar;
