import React, { memo, useEffect } from "react";
import Style from "./style";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useLocation } from "react-router-dom";

import Songlist from "./Songlist";
import Songs from "./Songs";
const Search = memo(() => {
  const { state } = useLocation();
  const { keyword } = state;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `歌曲`,
      children: <Songlist keyword={keyword}></Songlist>,
    },
    {
      key: "2",
      label: `歌单`,
      children: <Songs keyword={keyword}></Songs>,
    },
  ];
  return (
    <Style>
      <Tabs items={items}></Tabs>
    </Style>
  );
});

export default Search;
