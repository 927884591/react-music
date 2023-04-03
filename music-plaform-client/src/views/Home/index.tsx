import React, { memo } from "react";
import Singers from "./Singers";
import Banner from "./Banner";
import PlayList from "./PlayList";
import Style from "./style";

const Home = memo(() => {
  return (
    <Style>
      <Banner></Banner>
      <PlayList></PlayList>
      <Singers></Singers>
    </Style>
  );
});

export default Home;
