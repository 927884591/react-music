import React, { memo } from "react";
import Style from "./style";
import { useSong } from "@/store/useSong";
const Aside = memo(() => {
  const song = useSong();
  console.log(song);

  return (
    <Style>
      <div>lallalalal</div>
    </Style>
  );
});

export default Aside;
