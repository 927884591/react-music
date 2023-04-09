import React, { memo, useEffect, useState } from "react";
import Style from "./style";
import { Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CHANGEINFO } from "@/constants/router";
import MusicList from "@/components/MusicList";
import { useUser } from "@/store/useUser";
import { HttpManager } from "@/api";
const Profile = memo(() => {
  const [userInfo, setUserInfo]: any = useState({});
  const [list, setList]: any = useState([]);
  const navigate = useNavigate();
  const [userId, userPic] = useUser((state: any) => [
    state.userId,
    state.userPic,
  ]);
  //获取token的用户信息
  const localInfo = JSON.parse(localStorage.getItem("user") || "") || {};

  //请求用户信息
  async function getUserInfo(id: string) {
    const result = (await HttpManager.getUserOfId(id)) as any;
    console.log(result);
    if (result) {
      setUserInfo({
        username: result[0]?.username,
        userSex: result[0]?.sex,
        birth: result[0]?.birth,
        introduction: result[0]?.introduction,
        location: result[0]?.location,
      });
    }
  }
  //请求用户收藏歌曲
  async function getCollection(userId: string) {
    const result = (await HttpManager.getCollectionOfUser(userId)) as any;
    const collectIDList = result || []; // 存放收藏的歌曲ID
    // 通过歌曲ID获取歌曲信息
    for (const item of collectIDList) {
      const result = (await HttpManager.getSongOfId(item.songId)) as any;
      setList((list: any) => {
        return [...list, result[0]];
      });
    }
  }

  //页面加载就发送请求
  useEffect(() => {
    getUserInfo(userId);
    getCollection(userId);
  }, [userId]);
  return (
    <Style>
      <div className="top"></div>
      <div className="main">
        <div className="user-info">
          <div className="left">
            <Avatar
              size={60}
              src={HttpManager.attachImageUrl(userPic || localInfo?.userPic)}
            ></Avatar>
            <span className="name">
              {userInfo?.username || localInfo?.username}
            </span>
          </div>
          <Button className="right" onClick={() => navigate(CHANGEINFO)}>
            修改个人信息
          </Button>
        </div>
        <div className="music-list">
          <MusicList songlist={list} type={1}></MusicList>
        </div>
      </div>
    </Style>
  );
});

export default Profile;
