import React from "react";

import { Box } from "@mui/material";
import Card from "./Card/Card";

const ListCards = ({ cards }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: "0 5px",
          m: "0 5px",
          overflowX: "hidden",
          overflowY: "scroll",
          maxHeight: (theme) =>
            `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
              5
            )} - ${theme.trelloCustom.columnHeaderHeight} - ${
              theme.trelloCustom.columnFooterHeight
            })`,
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        }}
      >
        {cards?.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </>
  );
};

export default ListCards;
