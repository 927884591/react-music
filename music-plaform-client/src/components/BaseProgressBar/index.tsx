import React, { memo, useMemo, useState, useCallback } from "react";
import Style from "./style";

import { Slider } from "antd";

interface IProps {
  className?: string;
  donePercent?: number;
  originDonePercent?: number;
  renderLabel?: () => string;
  onBarClick: (donePercent: number) => void;
}

const BaseProgressBar: React.FC<IProps> = memo(
  ({ donePercent = 0, originDonePercent, renderLabel, onBarClick }) => {
    const [inputValue, setInputValue] = useState(1);
    const isNumber = (value: any): boolean => typeof value === "number";
    const width = useMemo(() => {
      const width = isNumber(originDonePercent)
        ? originDonePercent
        : donePercent * 100;
      return width;
    }, [donePercent, originDonePercent]);

    //当发生值改变时需要提交给store
    const onChange = (newValue: number) => {
      setInputValue(newValue);
      onBarClick(newValue / 100);
    };

    return (
      <Style>
        <Slider
          onChange={onChange}
          value={width}
          tooltip={{
            formatter: () => {
              return `${renderLabel ? renderLabel() : ""}`;
            },
          }}
          step={0.001}
        />
      </Style>
    );
  }
);

export default BaseProgressBar;
