import { experimental_extendTheme as extendTheme } from "@mui/material";
import {
  blue,
  cyan,
  deepOrange,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       //   main: "#556cd6",
//       main: yellow[500],
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: red.A400,
//     },
//     text: {
//       secondary: red[500],
//       primary: blue[500],
//     },
//   },
// });
const theme = extendTheme({
  colorScheme: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
});
export default theme;
