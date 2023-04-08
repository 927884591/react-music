import React, { memo, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Space, Table, Tag, Dropdown, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getSongTitle, getSingerName } from "@/utils/index";
import { useSong } from "@/store/useSong";
import { downloadMusic } from "@/utils";
interface IPorps {
  songlist: any;
  type?: number;
}

interface DataType {
  key: string;
  songName: string;
  name: number;
  introduction: string;
  edit: string;
}
//点击下载事件
const download = (e: any, recod: any) => {
  downloadMusic({
    songUrl: recod.url,
    songName: recod.name,
  });
};
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span>下载</span>,
  },
];
const columns: ColumnsType<DataType> = [
  {
    title: "歌曲",
    dataIndex: "songName",
    key: "songName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "歌手",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "专辑",
    dataIndex: "introduction",
    key: "introduction",
  },
  {
    title: "更多",
    key: "edit",
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={(e) => download(e, record)}>下载</Button>
      </Space>
    ),
  },
];

const MusicList: React.FC<IPorps> = memo((props: IPorps) => {
  const [playMusic, setCurrentPlayList] = useSong((state: any) => [
    state.playMusic,
    state.setCurrentPlayList,
  ]);
  const { songlist, type } = props;
  console.log(songlist);

  //播放列表
  const [list, setList]: any = useState([]);

  useEffect(() => {
    if (songlist) {
      songlist.forEach((item: any, index: number) => {
        item["songName"] = getSongTitle(item.name);
        item["singerName"] = getSingerName(item.name);
        item["index"] = index;
        item["key"] = item.id;
        if (type === 1) {
          setList([...list, item]);
        }
        if (type === 2) {
          setList((list: any) => [...list, item]);
        }
      });
    }
  }, [songlist]);
  return (
    <Table
      columns={columns}
      dataSource={list}
      onRow={(row: any, index) => ({
        onDoubleClick: () => {
          playMusic({
            id: row.id,
            url: row.url,
            pic: row.pic,
            index: row.index,
            songTitle: row.songName,
            singerName: row.singerName,
            lyric: row.lyric,
            currentSongList: songlist,
          });
        },
      })}
    />
  );
});

export default MusicList;
