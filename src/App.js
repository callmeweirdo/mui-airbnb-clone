// import "./App.css";
import { CssBaseline, Box } from "@mui/material";
import LocationCards from "./components/cards/LocationCards";
import Header from "./components/Header/Header";
import OptionsTab from "./components/options/OptionsTab";
import Footer from "./components/Fotter/Fotter";

import { Container } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          mb: "5px",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 100,
            flexGrow: 1,
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
          ;
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
