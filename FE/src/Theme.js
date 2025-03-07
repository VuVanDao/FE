import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      //   main: "#556cd6",
      main: red[500],
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: red[500],
      primary: blue[500],
    },
  },
});
export default theme;
