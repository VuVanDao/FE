import {
  Box,
  Button,
  ButtonBase,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import theme from "./Theme";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value={"dark"}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <NightlightIcon fontSize="small" />
            Dark
          </div>
        </MenuItem>
        <MenuItem value={"system"}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <SettingsSuggestIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
function App() {
  return (
    <Container sx={{ height: "100vh" }} maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trelloCustom.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.trelloCustom.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
