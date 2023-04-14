import React, { memo, useEffect, useState } from "react";
import Style from "./style";
import { Button, Input, Avatar, message } from "antd";
import { useParams } from "react-router-dom";
import { HttpManager } from "@/api";
import { formatDatetime } from "@/helpers/time";
import { LikeOutlined } from "@ant-design/icons";
import { useUser } from "@/store/useUser";
interface IProps {
  playId: string; // 歌曲ID或歌单ID
  type: number; // 歌单（1）/歌曲（0）
}
const Comment = memo((props: IProps) => {
  const [userId] = useUser((state: any) => [state.userId]);
  const { playId, type } = props;
  const { attachImageUrl } = HttpManager;
  const { id } = useParams();
  //初始化评论值
  const [text, setText] = useState("");
  const [commentList, setCommentList]: any = useState([]);
  // 获取所有评论
  async function getComment() {
    try {
      const result = (await HttpManager.getAllComment(
        type,
        id ? id : playId
      )) as ResponseBody;

      setCommentList((list: any) => result);
      for (let index = 0; index < commentList.length; index++) {
        // 获取评论用户的昵称和头像
        const resultUser = (await HttpManager.getUserOfId(
          commentList[index].userId
        )) as ResponseBody;
        commentList[index].avator = resultUser.data[0].avator;
        commentList[index].username = resultUser.data[0].username;
      }
    } catch (error) {
      console.error(error);
    }
  }
  // 点赞
  async function setSupport(id: string, up: string, index: number) {
    //检测登录状态
    const params = new URLSearchParams();
    params.append("id", id);
    params.append("up", up + 1);

    const result = (await HttpManager.setSupport(params)) as ResponseBody;
    if (result.success) {
      // proxy.$refs.up[index].children[0].style.color = "#2796dd";
      await getComment();
    }
  }
  // 提交评论
  async function submitComment() {
    // 0 代表歌曲， 1 代表歌单
    const params = new URLSearchParams();
    if (type === 1) {
      params.append("songListId", `${id}`);
    } else if (type === 0) {
      params.append("songId", `${id ? id : playId}`);
    }
    params.append("userId", userId);
    params.append("type", `${type}`);
    params.append("content", text);

    const result = (await HttpManager.setComment(params)) as ResponseBody;
    message.success(result.message);

    if (result.success) {
      setText("");
      await getComment();
    }
  }
  //更改text-area的内容触发
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };
  // 删除评论
  async function deleteComment(id: string, index: number) {
    const result = (await HttpManager.deleteComment(id)) as ResponseBody;
    message.success(result.message);

    if (result.success) commentList.value.splice(index, 1);
  }
  useEffect(() => {
    getComment();
  }, []);

  return (
    <Style>
      <div className="comment">
        <h2 className="comment-title">
          <span>评论</span>
          <span className="comment-desc">共 {commentList?.length} 条评论</span>
        </h2>
        <Input.TextArea
          className="comment-input"
          placeholder="期待您的精彩评论..."
          rows={4}
          value={text}
          onChange={handleTextChange}
        />
        <Button
          className="sub-btn"
          type="primary"
          onClick={() => submitComment()}
        >
          发表评论
        </Button>
      </div>
      <ul className="popular">
        {commentList?.map((item: any, index: number) => (
          <li>
            <div className="popular-msg">
              <Avatar className="popular-img" src={""} />
              <ul className="content">
                <li className="name">{item.username}</li>
                <li className="time">{formatDatetime(item.createTime)}</li>
                <li className="content">{item.content}</li>
              </ul>
              <div
                className="comment-ctr"
                onClick={() => setSupport(item.id, item.up, index)}
              >
                <LikeOutlined />
                <span>{item.up}</span>
                {item.userId === userId && (
                  <div onClick={() => deleteComment(item.id, index)}>删除</div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Style>
  );
});

export default Comment;
