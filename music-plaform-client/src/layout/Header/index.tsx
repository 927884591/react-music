import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./style";
import { ReactComponent as BackIcon } from "@/assets/icons/arrow-left.svg";
import { ReactComponent as ForwardIcon } from "@/assets/icons/arrow-right.svg";

import HeaderNav from "./HeaderNav";
import NavRight from "./NavRight";
const Header = (props: object) => {
  const navigate = useNavigate();
  return (
    <Style>
      <div className="header">
        <div className="route">
          <div className="back" onClick={() => navigate(-1)}>
            <BackIcon>后退</BackIcon>
          </div>
          <div className="forward" onClick={() => navigate(1)}>
            <ForwardIcon>前进</ForwardIcon>
          </div>
        </div>
        <HeaderNav></HeaderNav>
        <NavRight></NavRight>
      </div>
    </Style>
  );
};

export default Header;
