// import "./App.css";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <Box>
          <Header />
        </Box>
      </Box>
    </>
  );
}

export default App;
