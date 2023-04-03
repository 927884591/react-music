import React, { memo, useEffect, useState } from "react";
import { HttpManager } from "@/api";
import useAsyncFn from "@/hooks/useAsyncFn";
import Card from "@/components/Card";
import Style from "./style";
import { Space } from "antd";
interface IProps {
  keyword: string;
}
const Songs = memo((props: IProps) => {
  const { attachImageUrl } = HttpManager;
  const { keyword } = props;
  const [list, setList]: any = useState([]);
  const [getList, getListFn] = useAsyncFn(HttpManager.getSongListOfLikeTitle);
  //发送请求
  useEffect(() => {
    getListFn(keyword);
  }, []);
  //拿到的数据给list
  useEffect(() => {
    setList(getList?.value);
  }, [getList]);
  //请求列表函数
  console.log(list);

  return (
    <Style>
      <Space wrap size={30}>
        {list?.map((item: any) => (
          <Card
            img={attachImageUrl(item.pic)}
            key={item.id}
            id={item.id}
            type={2}
            data={item}
            name={item.name || item.title}
            showPlayIcon
          ></Card>
        ))}
      </Space>
    </Style>
  );
});

export default Songs;
