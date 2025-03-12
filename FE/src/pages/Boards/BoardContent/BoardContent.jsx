import { Box } from "@mui/material";
import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
const BoardContent = (props) => {
  const { board } = props;
  const order = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: "6px 0",
      }}
    >
      <ListColumns columns={order} />
    </Box>
  );
};

export default BoardContent;
