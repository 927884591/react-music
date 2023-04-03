import styled from "styled-components";

const Style = styled.div`
  display: flex;

  .info {
    display: flex;
    width: 400px;
    margin: 100px 50px;
  }
  .detail {
    padding: 30px 0;
    flex: 1;
    .introduction {
      font-size: 15px;
      font-weight: 700;
      text-indent: 2em;
    }
  }
`;
export default Style;
