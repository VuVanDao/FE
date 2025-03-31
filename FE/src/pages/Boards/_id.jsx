import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";
import { fetchBoardDetailAPi } from "~/apis";
function Board() {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "67ea6a00609bdbb7c46dfbda";
    fetchBoardDetailAPi(boardId).then((board) => {
      setBoard(board);
    });
  }, []);
  return (
    <Container sx={{ height: "100vh" }} maxWidth={false} disableGutters={true}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={mockData.board} />
    </Container>
  );
}

export default Board;
