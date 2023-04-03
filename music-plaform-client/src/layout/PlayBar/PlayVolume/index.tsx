import React, { memo, useMemo, useCallback } from "react";
import { ReactComponent as VolumeIcon } from "assets/icons/volume.svg";
import BaseProgressBar from "@/components/BaseProgressBar";
import Style from "./style";

import { useSong } from "@/store/useSong";
const PlayVolume = memo(() => {
  const song: any = useSong();
  const originDonePercent = useMemo(() => {
    const volume = Number((song?.volume || 0).toFixed(2));
    return Math.floor(volume * 100);
  }, [song?.volume]);
  const handleBarClick = useCallback(
    (percent: number) => {
      song?.setVolume(percent);
    },
    [song?.volume]
  );
  return (
    <Style>
      <VolumeIcon height="20px" width="20px" />
      <div className="progress">
        <BaseProgressBar
          className="bar"
          originDonePercent={originDonePercent}
          onBarClick={handleBarClick}
          renderLabel={() => `${Math.floor(song?.volume * 100)}`}
        />
      </div>
    </Style>
  );
});

export default PlayVolume;
