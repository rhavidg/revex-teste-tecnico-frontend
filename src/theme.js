import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#667eea",
    },
  },
  custom: {
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
});

export default theme;
