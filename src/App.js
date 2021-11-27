import { BrowserRouter } from "react-router-dom";
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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            " 0  5px 10px rgba(154,160,185,0.05),0 15px 40px rgba(166,173,201,0.2)",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#F6F9FC" },
          a: { textDecoration: "none" },
        }}
      />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
