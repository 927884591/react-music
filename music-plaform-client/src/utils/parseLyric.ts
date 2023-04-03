export function parseLyric(text: string) {
  let lines = text.split("\n");
  const pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g;
  const result = [];

  // 对于歌词格式不对的特殊处理
  if (!/\[.+\]/.test(text)) {
    return [[0, text]];
  }

  while (!pattern.test(lines[0])) {
    lines = lines.slice(1);
  }

  lines[lines.length - 1].length === 0 && lines.pop();
  for (const item of lines) {
    const time = item?.match(pattern); // 存前面的时间段
    const value = item.replace(pattern, ""); // 存歌词
    if (time) {
      for (const item1 of time) {
        const t = item1.slice(1, -1).split(":");
        if (value !== "") {
          result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        }
      }
    }
  }
  result.sort((a: any, b: any) => a[0] - b[0]);
  return result;
}
