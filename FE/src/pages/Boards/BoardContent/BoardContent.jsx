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
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Columns from "./ListColumns/Columns/Columns";
import Card from "./ListColumns/Columns/ListCards/Card/Card";
import { cloneDeep } from "lodash";
const ACTIVE_DRAG_ITEM_TYPE = {
  column: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  card: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

const BoardContent = (props) => {
  const { board } = props;
  const [orderColumnState, setOrderColumnState] = useState([]);
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  useEffect(() => {
    setOrderColumnState(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const findColumnByCardId = (cardId) => {
    console.log(cardId);
    return orderColumnState.find((column) =>
      column.cards.map((card) => card._id)?.includes(cardId)
    );
  };
  const handleDragStart = (event) => {
    console.log(event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.card
        : ACTIVE_DRAG_ITEM_TYPE.column
    );
    setActiveDragItemData(event?.active?.data?.current);
  };
  const handleDragOver = (event) => {
    console.log("------------------------");
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.column) {
      return;
    }
    console.log(event);
    const { active, over } = event;
    if (!over || !active) return;
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    const {
      id: overDraggingCardId,
      data: { current: overDraggingCardData },
    } = over;
    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overDraggingCardId);
    if (!activeColumn || !overColumn) return;
    if (activeColumn._id !== overColumn._id) {
      console.log("activeColumn._id !== overColumn._id");

      setOrderColumnState((prevColumns) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          //tim index overCard noi activeCard sap duoc tha
          (card) => card._id === overDraggingCardId
        );
        // console.log("overCardIndex", overCardIndex);
        let newCardIndex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards.length + 1;

        const nextColumns = cloneDeep(prevColumns);

        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        );
        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }
        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        return nextColumns;
      });
    }
  };
  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;
    if (!over || !active) return;
    if (active.id !== over.id) {
      const oldIndex = orderColumnState.findIndex((c) => c._id === active.id); //tim vi tri cu cua column
      const newIndex = orderColumnState.findIndex((c) => c._id === over.id); //tim vi tri moi cua column
      const dndOrderColumn = arrayMove(orderColumnState, oldIndex, newIndex); //sap xep lai column keo tha
      // const dndOrderColumnIds = dndOrderColumn.map((c) => c._id);
      setOrderColumnState(dndOrderColumn);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.card) {
      console.log("card");
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
  // console.log("id", activeDragItemId);
  // console.log("type", activeDragItemType);
  // console.log("data", activeDragItemData);
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: 0.5,
        },
      },
    }),
  };
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
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
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.column && (
              <Columns column={activeDragItemData} />
            )}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.card && (
              <Card card={activeDragItemData} />
            )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
};

export default BoardContent;
