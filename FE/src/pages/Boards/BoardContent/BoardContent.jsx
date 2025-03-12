import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
const BoardContent = (props) => {
  const { board } = props;
  const [orderColumnState, setOrderColumnState] = useState([]);
  useEffect(() => {
    const orderColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");
    setOrderColumnState(orderColumn);
  }, [board]);
  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = orderColumnState.findIndex((c) => c._id === active.id); //tim vi tri cu cua column
      const newIndex = orderColumnState.findIndex((c) => c._id === over.id); //tim vi tri moi cua column
      const dndOrderColumn = arrayMove(orderColumnState, oldIndex, newIndex); //sap xep lai column keo tha
      const dndOrderColumnIds = dndOrderColumn.map((c) => c._id);
      setOrderColumnState(dndOrderColumn);
    }
  };
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });
  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor);
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trelloCustom.boardContentHeight,
          p: "6px 0",
        }}
      >
        <ListColumns columns={orderColumnState} />
      </Box>
    </DndContext>
  );
};

export default BoardContent;
