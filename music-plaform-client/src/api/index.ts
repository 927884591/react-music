import { getBaseURL, get, post, deletes } from "./request";

const HttpManager = {
  // 获取图片信息
  attachImageUrl: (url: string) =>
    url
      ? `${getBaseURL()}/${url}`
      : "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
  // =======================> 用户 API
  // 登录
  signIn: (params: any) => post(`user/login/status`, params),
  // 注册
  SignUp: (params: any) => post(`user/add`, params),
  // 删除用户
  deleteUser: (id: string) => get(`user/delete?id=${id}`),
  // 更新用户信息
  updateUserMsg: (params: any) => post(`user/update`, params),
  updateUserPassword: (params: any) => post(`user/updatePassword`, params),
  // 返回指定ID的用户
  getUserOfId: (id: string) => get(`user/detail?id=${id}`),
  // 更新用户头像
  uploadUrl: (userId: string) =>
    `${getBaseURL()}/user/avatar/update?id=${userId}`,

  // =======================> 歌单 API
  // 获取全部歌单
  getSongList: () => get("songList"),
  // 获取歌单类型
  getSongListOfStyle: (style: string) =>
    get(`songList/style/detail?style=${style}`),
  // 返回标题包含文字的歌单
  getSongListOfLikeTitle: (keywords: string) =>
    get(`songList/likeTitle/detail?title=${keywords}`),
  // 返回歌单里指定歌单ID的歌曲
  getListSongOfSongId: (songListId: string) =>
    get(`listSong/detail?songListId=${songListId}`),

  // =======================> 歌手 API
  // 返回所有歌手
  getAllSinger: () => get("singer"),
  // 通过性别对歌手分类
  getSingerOfSex: (sex: string) => get(`singer/sex/detail?sex=${sex}`),

  // =======================> 收藏 API
  // 返回的指定用户ID的收藏列表
  getCollectionOfUser: (userId: string) =>
    get(`collection/detail?userId=${userId}`),
  // 添加收藏的歌曲 type: 0 代表歌曲， 1 代表歌单
  setCollection: (params: any) => post(`collection/add`, params),

  deleteCollection: (userId: string, songId: string) =>
    deletes(`collection/delete?userId=${userId}&&songId=${songId}`),

  isCollection: (params: any) => post(`collection/status`, params),

  // =======================> 评分 API
  // 提交评分
  setRank: (params: any) => post(`rankList/add`, params),
  // 获取指定歌单的评分
  getRankOfSongListId: (songListId: string) =>
    get(`rankList?songListId=${songListId}`),
  // 获取指定用户的歌单评分
  getUserRank: (consumerId: string, songListId: string) =>
    get(`/rankList/user?consumerId=${consumerId}&songListId=${songListId}`),

  // =======================> 评论 API
  // 添加评论
  setComment: (params: any) => post(`comment/add`, params),
  // 删除评论
  deleteComment: (id: string) => get(`comment/delete?id=${id}`),
  // 点赞
  setSupport: (params: any) => post(`comment/like`, params),
  // 返回所有评论
  getAllComment: (type: number, id: string) => {
    let url = "";
    if (type === 1) {
      url = `comment/songList/detail?songListId=${id}`;
    } else if (type === 0) {
      url = `comment/song/detail?songId=${id}`;
    }
    return get(url);
  },

  // =======================> 歌曲 API
  // 返回指定歌曲ID的歌曲
  getSongOfId: (id: string) => get(`song/detail?id=${id}`),
  // 返回指定歌手ID的歌曲
  getSongOfSingerId: (id: string) => get(`song/singer/detail?singerId=${id}`),
  // 返回指定歌手名的歌曲
  getSongOfSingerName: (keywords: string) =>
    get(`song/singerName/detail?name=${keywords}`),
  // 下载音乐
  downloadMusic: (url: string) => get(url, { responseType: "blob" }, 1),
  // downloadMusic: (url: string) => get(url, { responseType: "blob" }),
};

export { HttpManager };
