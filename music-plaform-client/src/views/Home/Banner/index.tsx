import React, { memo, useMemo, useState } from "react";
import BannerItem from "./BannerItem/index";
import Style from "./style";
import cn from "classnames";

import useInterval from "hooks/useInterval";

import { swiperList } from "@/utils/index";

const Banner = memo(() => {
  //记录当前banner

  const [currentMid, setCurrentMid] = useState(0);
  //确定好当前的banner设置对应的样式
  const bannersClassName = useMemo(() => {
    const len = swiperList?.length;
    const left = (currentMid - 1 + len) % len;
    const right = (currentMid + 1) % len;
    return {
      [currentMid]: "middle",
      [left]: "left",
      [right]: "right",
    };
  }, [currentMid, swiperList]);

  //鼠标触摸改变banner的index
  const handleMidChange = (index: number) => {
    setCurrentMid(index);
  };

  //banner循环
  useInterval(() => {
    if (!swiperList?.length) {
      return;
    }
    setCurrentMid((currentMid + 1) % swiperList.length);
  }, 6000);
  return (
    <Style>
      <div className="banners">
        {swiperList?.map(({ picImg }, index) => {
          const className = bannersClassName[index] || "hidden";
          return (
            <BannerItem
              key={index}
              imageUrl={picImg}
              className={cn(className)}
              // onClick={
              //   isMusicType ? () => handleItemClick(targetId) : undefined
              // }
            />
          );
        })}
      </div>
      <div className="dots">
        {swiperList.map(({ picImg }, index) => {
          return (
            <div
              key={index}
              className={cn("dot", index === currentMid ? "active" : "")}
              onMouseOver={() => handleMidChange(index)}
            />
          );
        })}
      </div>
    </Style>
  );
});

export default Banner;
