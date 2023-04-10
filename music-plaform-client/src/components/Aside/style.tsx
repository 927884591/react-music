import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  right: 0;
  bottom: 9vh;
  width: 350px;
  height: 82vh;
  padding-left: 15px;
  background-color: rgba(248, 248, 248, 0.8);
  backdrop-filter: blur(44px);
  .menus {
    width: 100%;
    cursor: pointer;
    z-index: 100;
    overflow-y: scroll;
    white-space: nowrap;
    .item {
      display: block;
      font-weight: 700;
      font-size: 18px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      &:hover {
        background-color: #ccc;
      }
    }
  }
`;
export default Style;
