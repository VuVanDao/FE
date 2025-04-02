import axios from "axios";
import { api_root } from "~/utils/constants";
//board
export const fetchBoardDetailAPi = async (boardId) => {
  const request = await axios.get(`${api_root}/v1/boards/${boardId}`);
  return request.data;
};

//column
export const createNewColumnAPI = async (newColumnData) => {
  const request = await axios.post(`${api_root}/v1/columns`, newColumnData);
  return request.data;
};
//card
export const createNewCardAPI = async (newCardData) => {
  const request = await axios.post(`${api_root}/v1/cards`, newCardData);
  return request.data;
};
