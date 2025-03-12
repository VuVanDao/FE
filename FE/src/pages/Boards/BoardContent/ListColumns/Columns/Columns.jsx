import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Cloud, ContentCopy, ContentCut } from "@mui/icons-material";
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
const Columns = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/*  column */}
      <Box
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
            Column title
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
        <ListCard />
        {/* column footer */}
        <Box
          sx={{
            height: (theme) => theme.trelloCustom.columnFooterHeight,
            p: 2,
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
          >
            Add new card
          </Button>
          <Tooltip title="drag column">
            <DragHandleIcon />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default Columns;
