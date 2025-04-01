import React, { useState } from "react";
import { Box, Input, InputAdornment, Tooltip, Typography } from "@mui/material";
import { Cloud, ContentCopy, ContentCut, Opacity } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import ListCard from "./ListCards/ListCards";
import { mapOrder } from "~/utils/sort";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const Columns = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column._id, data: { ...column } });
  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    touchAction: "none",
    height: "100%",
    opacity: isDragging ? 0.5 : undefined,
  };

  const orderCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  const [openNewCardForm, setNewCardForm] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const toggleOpenNewCardForm = () => setNewCardForm(!openNewCardForm);
  const addNewCard = () => {
    if (!newCardTitle) {
      toast.error("plz type your card title", { position: "top-center" });
      return;
    }
    toast.success("add card complete");
    setNewCardTitle("");
    toggleOpenNewCardForm(!openNewCardForm);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          color: (theme) =>
            theme.palette.mode === "light" ? "#333643" : "#ebecf0",
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
              5
            )})`,
        }}
      >
        {/* column title */}
        <Box
          sx={{
            height: (theme) => theme.trelloCustom.columnHeaderHeight,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // cursor: "pointer",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "1rem" }}
            variant="body2"
          >
            {column?.title}
          </Typography>
          <Box>
            <Tooltip title="More options">
              <KeyboardArrowDownIcon
                id="basic-column-title"
                aria-controls={open ? "basic-menu-workspaces" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
            <Menu
              id="basic-menu-workspaces"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-column-title",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ⌘C
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <AddCircleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DoNotDisturbOnIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/*list card in column content */}
        <ListCard cards={orderCards} />
        {/* column footer */}
        <Box
          sx={{
            height: (theme) => theme.trelloCustom.columnFooterHeight,
            p: 2,
          }}
        >
          {!openNewCardForm ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<AddCircleIcon />}
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "primary.main" : "#1976d2",
                }}
                onClick={() => toggleOpenNewCardForm()}
              >
                Add new card
              </Button>
              <Tooltip title="drag column">
                <DragHandleIcon />
              </Tooltip>
            </Box>
          ) : (
            <Box
              sx={{
                height: "100%",
                gap: 1,
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              <Input
                label="Outlined"
                variant="outlined"
                value={newCardTitle}
                placeholder="Card title"
                autoFocus
                data-no-dnd="true"
                onChange={(e) => setNewCardTitle(e.target.value)}
                sx={{
                  border: "1px solid white",
                  "&.MuiInput-root::before": {
                    borderBottomColor: "transparent",
                  },
                  "&.MuiInput-root::after": {
                    borderBottomColor: "transparent",
                  },
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "primary.main" : "black",
                  borderRadius: "5px",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "primary.main" : "black",
                  p: 0.5,
                }}
                endAdornment={
                  <InputAdornment
                    position="start"
                    onClick={() => setNewCardTitle("")}
                    sx={{ cursor: "pointer" }}
                  >
                    <HighlightOffIcon
                      sx={{
                        color: (theme) =>
                          newCardTitle.length > 0
                            ? theme.palette.mode === "dark"
                              ? "primary.main"
                              : "black"
                            : "transparent",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  color={"success"}
                  onClick={() => addNewCard()}
                >
                  Add
                </Button>
                <Tooltip title="cancel">
                  <CloseIcon
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "primary.main"
                          : "black",
                      cursor: "pointer",
                    }}
                    onClick={toggleOpenNewCardForm}
                  />
                </Tooltip>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Columns;
