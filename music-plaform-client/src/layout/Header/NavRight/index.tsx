import React, { memo, useEffect } from "react";
import { useState } from "react";
import Style from "./style";
import { useNavigate } from "react-router-dom";
import { LOGIN, SEARCH, PROFILE, CHANGEINFO } from "@/constants/router";
import { HttpManager } from "@/api";
import { useConfigure } from "@/store/configure";
import { useUser } from "@/store/useUser";
import { Dropdown, Input } from "antd";
import type { MenuProps } from "antd";
import { Avatar } from "antd";
const NavRight = memo(() => {
  const { Search } = Input;
  const [isShow, setIsShow] = useState(true);
  const [user, setUser]: any = useState("");
  const navigate = useNavigate();
  const { attachImageUrl } = HttpManager;
  const [userPic] = useUser((state: any) => [state.userPic]);
  const [token, setToken] = useConfigure((state: any) => [
    state.token,
    state.setToken,
  ]);
  useEffect(() => {
    setUser((state: any) => localStorage.getItem("user"));
  }, []);
  console.log(token);
  useEffect(() => {
    setUser((state: any) => localStorage.getItem("user"));
  }, [token]);
  const items: MenuProps["items"] = [
    {
      label: (
        <span
          onClick={() => {
            navigate(PROFILE);
          }}
        >
          个人信息
        </span>
      ),
      key: "0",
    },
    {
      label: <span onClick={() => navigate(CHANGEINFO)}>修改信息</span>,
      key: "2",
    },
    {
      label: (
        <span
          onClick={() => {
            setToken(false);
            localStorage.setItem("user", "");
            setUser("");
          }}
        >
          退出登录
        </span>
      ),
      key: "3",
    },
  ];
  //搜索触发的方法
  const onSearch = (keyword: string) => {
    navigate(SEARCH, { state: { keyword } });
  };

  return (
    <Style>
      <Search
        placeholder="请输入搜索的歌曲"
        onSearch={onSearch}
        style={{ width: 200 }}
      ></Search>
      {user === "" ? (
        <div className="right">
          <div className="login" onClick={() => navigate(LOGIN)}>
            登录
          </div>

          <div className="register">注册</div>
        </div>
      ) : (
        <div className="user-info">
          <Dropdown menu={{ items }}>
            <Avatar src={attachImageUrl(userPic)} />
          </Dropdown>
        </div>
      )}
    </Style>
  );
});

export default NavRight;
