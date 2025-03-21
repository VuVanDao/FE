import React from "react";
import { Box, Button } from "@mui/material";
import Columns from "./Columns/Columns";
import AddIcon from "@mui/icons-material/Add";

import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
const ListColumns = ({ columns }) => {
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
      {/* bao boc cac column */}
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "start",
          overflowX: "auto",
          overflowY: "hidden",
          mt: "3px",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
        }}
      >
        {columns?.map((column) => (
          <Columns key={column._id} column={column} />
        ))}
        {/* btn add column */}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            borderRadius: "6px",
            height: "fit-content",
            bgcolor: "#ffffff3d",
          }}
        >
          <Button
            startIcon={<AddIcon />}
            sx={{
              width: "100%",
              color: (theme) =>
                theme.palette.mode === "dark" ? "primary.main" : "white",
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
};

export default ListColumns;
