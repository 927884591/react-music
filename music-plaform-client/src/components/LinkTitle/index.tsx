import React, { memo } from "react";
import LinkTitleStyle from "./style";
import { RightOutlined } from "@ant-design/icons";
//导入路由
import { useNavigate } from "react-router-dom";
import { SONGLIST, SINGERS } from "@/constants/router";
interface IProps {
  title: string;
  route?: string;
  checkAll?: boolean;
}
const LinkTitle: React.FC<IProps> = memo(({ title, route, checkAll }) => {
  const navigate = useNavigate();
  //跳转路由
  const toPath = () => {
    if (!route) {
      return;
    } else if (route === SONGLIST) {
      console.log(1112);
      navigate(SONGLIST);
    } else if (route === SINGERS) {
      navigate(SINGERS);
    }
  };
  return (
    <LinkTitleStyle onClick={toPath}>
      <div className="base">
        {title}
        <RightOutlined />
      </div>
      {checkAll && <div className="checkAll">查看全部</div>}
    </LinkTitleStyle>
  );
});

export default LinkTitle;
