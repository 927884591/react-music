import styled from "styled-components";

const style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    width: 100px;
    justify-content: space-around;
    .register,
    .login {
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }
    .register:hover,
    .login:hover {
      color: black;
    }
  }
`;
export default style;
