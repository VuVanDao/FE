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
  trelloCustom: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal, //primary.main,primary.light
        secondary: deepOrange,
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
  },
});
export default theme;
