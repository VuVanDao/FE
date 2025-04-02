import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";
import {
  createNewCardAPI,
  createNewColumnAPI,
  fetchBoardDetailAPi,
} from "~/apis";
function Board() {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "67ea6a00609bdbb7c46dfbda";
    fetchBoardDetailAPi(boardId).then((board) => {
      setBoard(board);
    });
  }, []);
  const createNewColumn = async (columnData) => {
    const createdColumn = await createNewColumnAPI({
      ...columnData,
      boardId: board._id,
    });
    console.log("createdColumn", createdColumn);
  };
  const createNewCard = async (cardData) => {
    const createdColumn = await createNewCardAPI({
      ...cardData,
      boardId: board._id,
      // columnId:
    });
    console.log("createdColumn", createdColumn);
  };
  return (
    <Container sx={{ height: "100vh" }} maxWidth={false} disableGutters={true}>
      <AppBar />
      <BoardBar board={board} />
      {/* <BoardContent board={mockData.board} /> */}
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
      />
    </Container>
  );
}

export default Board;
