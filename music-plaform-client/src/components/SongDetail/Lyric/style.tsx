import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  color: black;
  font-size: 1em;

  /* For hide scrollbar */
  padding-right: 17px;
  /* box-sizing: content-box; */
  box-shadow: 0 1px 5px #fff;
  //歌词动画
  .lyric-fade-enter,
  .lyric-fade-exit {
    transform: translateX(30px);
    opacity: 0;
  }

  .lyric-fade-enter-active,
  .lyric-fade-exit-active {
    transition: all 0.3s ease;
  }
  .lyric-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 10px;
    padding-left: 15px;
    font-weight: 600;
    color: #3d3d3d;
    &:hover {
      background-color: #dcdcdc;
    }
  }
  .song-lyric {
    transition: all 0.2;
  }
  .active {
    font-size: 1.2em;
    color: black;
    font-weight: 700;
  }

  .loading {
    text-align: left;
  }
`;
