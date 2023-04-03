/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ResponseBody {
  code: string;
  success: boolean;
  message: string;
  type: string;
  data?: any;
}
