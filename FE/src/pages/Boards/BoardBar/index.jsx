import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttractionsSharpIcon from "@mui/icons-material/AttractionsSharp";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const STYLE_COMMON = {
  color: "primary.main",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  // bgcolor: "white",
  "&:hover": {
    bgcolor: "primary.50",
  },
};
const BoardBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        gap: 2,
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="with icon"
          clickable
          sx={STYLE_COMMON}
        />
        <Chip
          icon={<AttractionsSharpIcon />}
          label="with icon"
          clickable
          sx={STYLE_COMMON}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          clickable
          sx={STYLE_COMMON}
        />
        <Chip
          icon={<AutoAwesomeIcon />}
          label="Automation"
          clickable
          sx={STYLE_COMMON}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          sx={STYLE_COMMON}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
          Invite
        </Button>

        <AvatarGroup
          max={5}
          sx={{
            "& .MuiAvatar-root": {
              width: 35,
              height: 35,
            },
          }}
        >
          <Tooltip title="vanDao">
            <Avatar src="https://i.pinimg.com/originals/d0/8c/fc/d08cfc4ede88b38c1fe39020433dc889.gif" />
          </Tooltip>
          <Tooltip title="vanDao">
            <Avatar src="https://i.pinimg.com/originals/d0/8c/fc/d08cfc4ede88b38c1fe39020433dc889.gif" />
          </Tooltip>
          <Tooltip title="vanDao">
            <Avatar src="https://i.pinimg.com/originals/d0/8c/fc/d08cfc4ede88b38c1fe39020433dc889.gif" />
          </Tooltip>
          <Tooltip title="vanDao">
            <Avatar src="https://i.pinimg.com/originals/d0/8c/fc/d08cfc4ede88b38c1fe39020433dc889.gif" />
          </Tooltip>
          <Tooltip title="vanDao">
            <Avatar src="https://i.pinimg.com/originals/d0/8c/fc/d08cfc4ede88b38c1fe39020433dc889.gif" />
          </Tooltip>
          <Tooltip title="vanDao">
            <Avatar src="https://i.pinimg.com/originals/d0/8c/fc/d08cfc4ede88b38c1fe39020433dc889.gif" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
