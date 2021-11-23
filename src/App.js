import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

// eslint-disable-next-line no-unused-vars
import { firebaseInit } from "./firebase/config/index";
import { AppRoutes } from "./routes/AppRoutes";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[600],
      dark: indigo[700],
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#F6F9FC" } }} />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
