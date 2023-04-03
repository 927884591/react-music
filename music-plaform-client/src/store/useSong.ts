import { create } from "zustand";
import { ISongType } from "@/types/song";
export const useSong = create((set) => ({
  /** 音乐信息 */
  songId: "", // 音乐 ID
  songTitle: "", // 歌名
  songUrl: "", // 音乐 URL
  songPic: `/img/songPic/tubiao.jpg`, // 歌曲图片
  singerName: "", //  歌手名
  lyric: [], // 处理后的歌词数据

  /** 音乐播放信息 */
  isPlay: false, // 播放状态
  playBtnIcon: "", // 播放状态的图标
  volume: 1, // 音量
  duration: 0, // 音乐时长
  curTime: 0, // 当前音乐的播放位置
  changeTime: 0, // 指定播放时刻
  autoNext: true, // 用于触发自动播放下一首

  /** 音乐列表信息 */
  currentPlayList: [], // 当前播放列表
  songDetails: null, // 单个歌单信息
  currentPlayIndex: 1, // 当前歌曲在歌曲列表的位置
  setSongId: (songId: string) => set((state: ISongType) => ({ songId })),
  setSongTitle: (songTitle: string) =>
    set((state: ISongType) => ({ songTitle })),
  setSongUrl: (songUrl: string) => set((state: ISongType) => ({ songUrl })),
  setSongPic: (songPic: string) => set((state: ISongType) => ({ songPic })),
  setSingerName: (singerName: string) =>
    set((state: ISongType) => ({ singerName })),
  setAutoNext: (autoNext: string) => set((state: ISongType) => ({ autoNext })),
  setLyric: (lyric: any) => set((state: ISongType) => ({ lyric })),
  setIsPlay: (isPlay: boolean) => set((state: ISongType) => ({ isPlay })),
  setPlayBtnIcon: (playBtnIcon: string) =>
    set((state: ISongType) => ({ playBtnIcon })),
  setVolume: (volume: number) => set((state: ISongType) => ({ volume })),
  setDuration: (duration: number) => set((state: ISongType) => ({ duration })),
  setCurTime: (curTime: number) => set((state: ISongType) => ({ curTime })),
  setChangeTime: (changeTime: number) =>
    set((state: ISongType) => ({ changeTime })),
  setCurrentPlayList: (currentPlayList: any) =>
    set((state: ISongType) => ({ currentPlayList })),
  setSongDetails: (songDetails: any) =>
    set((state: ISongType) => ({ songDetails })),
  setCurrentPlayIndex: (currentPlayIndex: number) =>
    set((state: ISongType) => ({ currentPlayIndex })),
  //异步请求
  playMusic: (song: any) =>
    set((state: ISongType) => ({
      songId: song.id,
      songUrl: song.url,
      songPic: song.pic,
      currentPlayIndex: song.index,
      songTitle: song.songTitle,
      singerName: song.singerName,
      lyric: song.lyric,
      currentPlayList: song.currentSongList,
    })),
}));
