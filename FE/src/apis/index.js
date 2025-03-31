import axios from "axios";
import { api_root } from "~/utils/constants";
export const fetchBoardDetailAPi = async (boardId) => {
  const request = await axios.get(`${api_root}/v1/boards/${boardId}`);
  return request.data;
};
