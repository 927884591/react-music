import React, { memo, useEffect, useState } from "react";
import Style from "./style";
import { Space } from "antd";
import Card from "@/components/Card";
import { HttpManager } from "@/api";
interface IProps {
  type: string;
}
const Children = memo((props: IProps) => {
  const { type } = props;
  const [renderList, setRenderList]: any = useState([]);
  console.log(renderList);

  const { attachImageUrl } = HttpManager;
  async function getSongListOfStyle(style: string) {
    if (type === "-1") {
      const res = await HttpManager.getAllSinger();
      setRenderList(res);
    } else {
      const res = (await HttpManager.getSingerOfSex(style)) as ResponseBody;
      setRenderList(res);
    }
  }

  //请求列表
  useEffect(() => {
    getSongListOfStyle(type);
  }, []);
  return (
    <Style>
      <Space wrap size={30}>
        {renderList.map((item: any) => (
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

export default Children;
