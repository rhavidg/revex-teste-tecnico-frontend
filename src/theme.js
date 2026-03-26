import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#667eea",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "	#F5F5F5",
        },
      },
    },
  },
  custom: {
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
});

export default theme;
