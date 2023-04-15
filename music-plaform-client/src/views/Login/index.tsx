import React, { memo, useState } from "react";
import Style from "./style";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import { HttpManager } from "@/api";
import { useUser } from "@/store/useUser";
import { useConfigure } from "@/store/configure";
import { useNavigate } from "react-router-dom";
import { HOME, SIGNUP } from "@/constants/router";
import { message } from "antd";

const Login = memo(() => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = HttpManager;
  const [setUserId, setUsername, setUserPic, state] = useUser((state: any) => [
    state.setUserId,
    state.setUsername,
    state.setUserPic,
    state,
  ]);
  const [token, setToken] = useConfigure((state: any) => [
    state.token,
    state.setToken,
  ]);
  //
  const changeUser = (event: any) => {
    setUser(event.target.value);
  };
  const changePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const login = async () => {
    const params = new URLSearchParams();
    params.append("username", user);
    params.append("password", password);
    //发送登录请求
    const res: any = await signIn(params);
    if (res.success) {
      //提交用户信息到store中
      setUserId(res.data[0].id);
      setUserPic(res.data[0].avator);
      setUsername(res.data[0].username);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: res.data[0].id,
          avator: res.data[0].avator,
          username: res.data[0].username,
        })
      );
      setToken(() => true);
      //跳转到home页面
      navigate(HOME);
    } else {
      messageApi.open({
        type: "warning",
        content: res.message,
      });
    }
  };
  return (
    <Style>
      {contextHolder}
      <div className="content">
        <div className="left">
          <img src={img2} className="people p-animtion" alt="people" />
          <img src={img1} className="sphere s-animtion" alt="sphere" />
        </div>
        <div className="right">
          <div className="form-wrappepr">
            <h1>欢迎您的到来</h1>
            <input
              type="text"
              className="inputs user"
              placeholder="请输入账号"
              value={user ? user : undefined}
              onChange={(e) => changeUser(e)}
            />
            <input
              type="password"
              className="inputs pwd"
              placeholder="请输入密码"
              value={password ? password : undefined}
              onChange={(e) => changePassword(e)}
            />
            <span className="register" onClick={() => navigate(SIGNUP)}>
              注册
            </span>
            <button className="login" onClick={login}>
              登录
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
});

export default Login;
