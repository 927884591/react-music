import React, { memo } from "react";
import cn from "classnames";
import BannerItemStyle from "./style";

interface IProps {
  imageUrl: any;
  className?: string;
  onClick?: () => void;
}

const BannerItem: React.FC<IProps> = memo(({ imageUrl, className }) => {
  return (
    <BannerItemStyle className={className}>
      <img src={imageUrl} loading="lazy" alt="" />
    </BannerItemStyle>
  );
});

export default BannerItem;
