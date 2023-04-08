import React, { memo, useEffect, useState } from "react";
import Style from "./style";
import { HttpManager } from "@/api";
import { useSong } from "@/store/useSong";
import { useUser } from "@/store/useUser";
import { checkStatus } from "@/utils";
import { message } from "antd";
const LikeBtn = memo(() => {
  //拿到store的数据
  const [songId] = useSong((state: any) => [state.songId]);
  const [userId] = useUser((state: any) => [state.userId]);
  const [isCollection, setIscollection] = useState(false);
  //拿到初始化的收藏信息
  async function initCollection() {
    // if (!checkStatus(false)) return;
    const params = new URLSearchParams();
    params.append("userId", userId);
    params.append("type", "0"); // 0 代表歌曲， 1 代表歌单
    params.append("songId", songId);
    const res = ((await HttpManager.isCollection(params)) as ResponseBody).data;
    console.log(res);
    setIscollection(res);
  }
  //触发收藏更改方法
  async function changeCollection() {
    // if (!checkStatus()) return;
    console.log(userId, songId);

    const params = new URLSearchParams();
    params.append("userId", userId);
    params.append("type", "0"); // 0 代表歌曲， 1 代表歌单
    params.append("songId", songId);

    const result: any = isCollection
      ? ((await HttpManager.deleteCollection(userId, songId)) as ResponseBody)
      : ((await HttpManager.setCollection(params)) as ResponseBody);

    message.success(result.message);
    if (result.data == true || result.data == false)
      setIscollection(result.data);
  }
  useEffect(() => {
    if (songId) initCollection();
  }, [songId]);
  return (
    <Style>
      <input
        type="checkbox"
        id="favorite"
        checked={isCollection}
        onChange={() => changeCollection()}
        name="favorite-checkbox"
        value="favorite-button"
      />
      <label htmlFor="favorite" className="container" onClick={() => {}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </label>
    </Style>
  );
});

export default LikeBtn;
