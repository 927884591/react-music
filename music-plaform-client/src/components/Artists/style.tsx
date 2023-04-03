import styled from "styled-components";
export default styled.div`
  display: flex;
  align-items: center;
  color: tipsColor;
  .singer {
    margin-top: 5px;
    font-size: 0.9em;
    font-weight: 600;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }

  .slash {
    margin: 0 5px;
  }
`;
