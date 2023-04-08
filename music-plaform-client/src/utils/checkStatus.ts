import { useConfigure } from "@/store/configure";
import { message } from "antd";
// 判断登录状态
export function checkStatus(status?: boolean) {
  const [token] = useConfigure((state: any) => [state.token]);

  if (!token.value) {
    if (status !== false) message.error("请先登录");
    return false;
  }
  return true;
}
