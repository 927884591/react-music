export function getUserSex(sex: number) {
  if (sex === 0) {
    return "女";
  } else if (sex === 1) {
    return "男";
  }
}

// 获取歌曲名
export function getSongTitle(str: string) {
  return str.split("-")[1];
}

// 获取歌手名
export function getSingerName(str: string) {
  return str.split("-")[0];
}
