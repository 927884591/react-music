import React, { memo } from "react";
import Style from "./style";
import { Button, Input, Avatar } from "antd";
import { useParams } from "react-router-dom";
import { HttpManager } from "@/api";
interface IProps {
  playId: Number; // 歌曲ID或歌单ID
  type: Number; // 歌单（1）/歌曲（0）
}
const Comment = memo((props: IProps) => {
  const { attachImageUrl } = HttpManager;
  const { id } = useParams();
  console.log(id);

  return (
    <Style>
      <div className="comment">
        <h2 className="comment-title">
          <span>评论</span>
          <span className="comment-desc">共 {} 条评论</span>
        </h2>
        <Input.TextArea
          className="comment-input"
          placeholder="期待您的精彩评论..."
          rows={4}
        />
        <Button className="sub-btn" type="primary" onClick={() => {}}>
          发表评论
        </Button>
      </div>
      <ul className="popular">
        <li>
          <Avatar className="popular-img" src={""} />
          <div className="popular-msg">
            <ul>
              <li className="name">{}</li>
              <li className="time">{}</li>
              <li className="content">{}</li>
            </ul>
          </div>
        </li>
      </ul>
    </Style>
  );
});

export default Comment;
