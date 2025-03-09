import { Badge, Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as trelloIcon } from "~/assets/trello.svg";
import WorkSpaces from "./Menus/WorkSpaces";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Templates from "./Menus/Templates";
import SearchInput from "./Menus/SearchInput";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";
const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SvgIcon
            component={trelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpaces />
          <Recent />
          <Started />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <SearchInput sx={{}} />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge variant="dot" color="secondary" sx={{ cursor: "pointer" }}>
            <NotificationsIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge
            variant="dot"
            sx={{ cursor: "pointer", color: "primary.main" }}
          >
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
};

export default AppBar;
