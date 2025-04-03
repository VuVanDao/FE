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
  updateBoardDetailAPi,
} from "~/apis";
import { isEmpty } from "lodash";
import { generatePlaceholderCard } from "~/utils/formatter";
function Board() {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "67ea6a00609bdbb7c46dfbda";
    fetchBoardDetailAPi(boardId).then((board) => {
      board.columns.forEach((column) => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)];
          column.cardOrderIds = [generatePlaceholderCard(column)._id];
        }
      });
      setBoard(board);
    });
  }, []);

  const createNewColumn = async (columnData) => {
    const createdColumn = await createNewColumnAPI({
      ...columnData,
      boardId: board._id,
    });
    // console.log("createdColumn", createdColumn);
    const newBoard = {
      ...board,
    };
    createdColumn.cards = [generatePlaceholderCard(createdColumn)];
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id];

    newBoard.columns.push(createdColumn);
    newBoard.columnOrderIds.push(createdColumn._id);

    setBoard(newBoard);
  };

  const createNewCard = async (cardData) => {
    const createdCard = await createNewCardAPI({
      ...cardData,
      boardId: board._id,
    });
    // console.log("createdCard", createdCard);
    const newBoard = {
      ...board,
    };
    newBoard.columns
      .find((column) => column._id === createdCard.columnId)
      .cards.push(createdCard);
    newBoard.columns
      .find((column) => column._id === createdCard.columnId)
      .cardOrderIds.push(createdCard._id);

    setBoard(newBoard);
  };

  const moveColumns = async (dndOrderColumn) => {
    const dndOrderColumnIds = dndOrderColumn.map((c) => c._id);
    const newBoard = {
      ...board,
    };
    newBoard.columns = dndOrderColumn;
    newBoard.columnOrderIds = dndOrderColumnIds;
    setBoard(newBoard);
    await updateBoardDetailAPi(newBoard._id, {
      columnOrderIds: newBoard.columnOrderIds,
    });
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
        moveColumns={moveColumns}
      />
    </Container>
  );
}

export default Board;
