import { Button, ButtonBase, Typography } from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material";
const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
      {mode === "light" ? "turn dark" : "turn light"}
    </Button>
  );
};
function App() {
  return (
    <>
      <ModeToggle />
      <ButtonBase>hello</ButtonBase>
      <Button color="success">test</Button>
      <Button color="error">test1</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
      <Typography variant="body2" color={"text.secondary"}>
        VuVanDao
      </Typography>
      <Typography variant="body2" color={"primary.main"}>
        VuVanDao
      </Typography>
    </>
  );
}

export default App;
