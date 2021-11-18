import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import { RootView } from "./views/RootView";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#F6F9FC" } }} />
      <RootView />
    </>
  );
}

export default App;
