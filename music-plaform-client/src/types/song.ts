export interface ISongType {
  /** 音乐信息 */
  songId: string; // 音乐 ID
  songTitle: string; // 歌名
  songUrl: string; // 音乐 URL
  songPic: string; // 歌曲图片
  singerName: string; //  歌手名
  lyric: any; // 处理后的歌词数据

  /** 音乐播放信息 */
  isPlay: boolean; // 播放状态
  playBtnIcon: string; // 播放状态的图标
  volume: number; // 音量
  duration: number; // 音乐时长
  curTime: number; // 当前音乐的播放位置
  changeTime: number; // 指定播放时刻
  autoNext: boolean; // 用于触发自动播放下一首

  /** 音乐列表信息 */
  currentPlayList: any; // 当前播放列表
  songDetails: object; // 单个歌单信息
  currentPlayIndex: number; // 当前歌曲在歌曲列表的位置
}
