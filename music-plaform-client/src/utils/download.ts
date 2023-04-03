import { HttpManager } from "@/api";
// 下载
export async function downloadMusic({ songUrl, songName }: any) {
  console.log(songUrl);
  const result = (await HttpManager.downloadMusic(songUrl)) as ResponseBody;
  console.log(result);

  const eleLink = document.createElement("a");
  eleLink.download = `${songName}.mp3`;
  eleLink.style.display = "none";
  // 字符内容转变成 blob 地址
  const blob = new Blob([result.data]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink); // 触发点击
  eleLink.click();
  document.body.removeChild(eleLink); // 移除
}
