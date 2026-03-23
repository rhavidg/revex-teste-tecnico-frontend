import "./App.css";
import AppRoutes from "./routes/Routes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
