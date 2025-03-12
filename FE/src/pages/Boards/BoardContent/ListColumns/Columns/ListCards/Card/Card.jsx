import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Button } from "@mui/material";
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Card = ({ temporaryMediaMedia }) => {
  if (temporaryMediaMedia) {
    return (
      <>
        <MuiCard
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
          <CardContent
            sx={{
              "&:last-child": {
                p: 1.5,
              },
            }}
          >
            <Typography>Frieren sleeping</Typography>
          </CardContent>
        </MuiCard>
      </>
    );
  }
  return (
    <>
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 14px 28px 0 rgba(0, 0, 0, 0.05)",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "black" : "white",
          color: (theme) => (theme.palette.mode === "dark" ? "white" : "black"),
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
      </MuiCard>
    </>
  );
};

export default Card;
