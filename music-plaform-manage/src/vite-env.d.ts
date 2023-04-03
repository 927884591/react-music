/// <reference types="vite/client" />
interface ResponseBody {
  code: string;
  success: boolean;
  message: string;
  type: string;
  data?: any;
}
