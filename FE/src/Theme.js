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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({ color: theme.palette.primary.main }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "3px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "8px",
          },
          "*::-webkit-scroll-bar-thumb:hover": {
            backgroundColor: "#00b894",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            // "MuiInputBase-input": {
            //   backgroundColor: theme.palette.primary.light,
            //   Color: theme.palette.primary.light,
            // },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
          };
        },
      },
    },
  },
});
export default theme;
