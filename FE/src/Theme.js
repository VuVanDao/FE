import { experimental_extendTheme as extendTheme } from "@mui/material";
import { deepOrange, orange } from "@mui/material/colors";

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
        // primary: teal, //primary.main,primary.light
        secondary: deepOrange,
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
        // primary: cyan,
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
        root: ({ theme }) => ({
          color: theme.palette.mode === "dark" ? "#90caf9" : "white",
        }),
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
          console.log(theme);
          return {
            color: theme.palette.mode === "dark" ? "#90caf9" : "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.mode === "dark" ? "#90caf9" : "white",
            },
            "& .css-1i1js26-MuiSvgIcon-root-MuiSelect-icon": {
              borderColor:
                theme.palette.mode === "dark" ? "primary.main" : "white",
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor:
                  theme.palette.mode === "dark" ? "#90caf9" : "white",
              },
            },
            "& fieldSet": {
              borderWidth: "1px !important",
            },
          };
        },
      },
    },
  },
});
export default theme;
