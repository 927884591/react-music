import styled from "styled-components";

const style = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(248, 248, 248, 0.8);
  box-shadow: 0 1px 10px 1px rgb(0 0 0 / 12%);
  padding: 0;
  z-index: 11;
  backdrop-filter: blur(44px);
  .header {
    display: flex;
    justify-content: space-between;
    height: 9vh;
    line-height: 9vh;
    width: 1140px;
    margin: 0 auto;

    .route {
      display: flex;
      align-items: center;
      .back {
        display: inline-block;
        margin-right: 15px;
        > svg {
          width: 40px;
          height: 20px;
          cursor: pointer;
          transition: all 0.4s ease-in;
          background-color: #fff;
          border-radius: 5px;
          &:hover {
            box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
            transform: translateY(-2px);
            transition: all 0.4s;
          }
        }
      }
      .forward {
        display: inline-block;
        > svg {
          width: 40px;
          height: 20px;
          line-height: 20px;
          cursor: pointer;
          transition: all 0.4s ease-in;
          background-color: #fff;
          border-radius: 5px;
          &:hover {
            box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
            transform: translateY(-2px);
            transition: all 0.4s;
          }
        }
      }
    }
  }
`;
export default style;
