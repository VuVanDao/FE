import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Cloud, ContentCopy, ContentCut } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GroupsIcon from "@mui/icons-material/Groups";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const BoardContent = () => {
  const COLUMN_HEADER_HEIGHT = "50px";
  const COLUMN_FOOTER_HEIGHT = "55px";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
        }}
      >
        {/* board content column */}
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
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
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

          {/* column content */}
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
                `calc(${
                  theme.trelloCustom.boardContentHeight
                } - ${theme.spacing(
                  5
                )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
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
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 14px 28px 0 rgba(0, 0, 0, 0.05)",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "black" : "white",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{
                  height: 140,
                  backgroundSize: "content",
                }}
                image="https://i.pinimg.com/originals/78/01/e8/7801e8c3976a91489510a5f7850bc1a0.gif"
                title="frieren"
              />
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 0.5,
                  },
                }}
              >
                <Typography>Frieren sleeping</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button
                  size="small"
                  startIcon={<GroupsIcon />}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1565c0",
                  }}
                >
                  20
                </Button>
                <Button
                  size="small"
                  startIcon={<ModeCommentIcon />}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1565c0",
                  }}
                >
                  15
                </Button>
                <Button
                  size="small"
                  startIcon={<InsertLinkIcon />}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1565c0",
                  }}
                >
                  10
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* column footer */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
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

          {/* column content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              // px: 2,
              p: "0 5px",
              m: "0 5px",
              overflowX: "hidden",
              overflowY: "scroll",
              maxHeight: (theme) =>
                `calc(${
                  theme.trelloCustom.boardContentHeight
                } - ${theme.spacing(
                  5
                )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
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
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 14px 28px 0 rgba(0, 0, 0, 0.05)",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "black" : "white",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{
                  height: 140,
                  backgroundSize: "content",
                }}
                image="https://i.pinimg.com/originals/78/01/e8/7801e8c3976a91489510a5f7850bc1a0.gif"
                title="frieren"
              />
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 0.5,
                  },
                }}
              >
                <Typography>Frieren sleeping</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button
                  size="small"
                  startIcon={<GroupsIcon />}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1565c0",
                  }}
                >
                  20
                </Button>
                <Button
                  size="small"
                  startIcon={<ModeCommentIcon />}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1565c0",
                  }}
                >
                  15
                </Button>
                <Button
                  size="small"
                  startIcon={<InsertLinkIcon />}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1565c0",
                  }}
                >
                  10
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography component="div">Card 1</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* column footer */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  );
};

export default BoardContent;
