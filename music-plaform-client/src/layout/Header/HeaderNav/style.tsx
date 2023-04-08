import styled from "styled-components";

const HeaderNav = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  .nav-item {
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  .active {
    color: black;
  }
`;
export default HeaderNav;
