// import "./App.css";
import { CssBaseline, Box } from "@mui/material";
import LocationCards from "./components/cards/LocationCards";
import Header from "./components/Header/Header";
import OptionsTab from "./components/options/OptionsTab";
import Footer from "./components/Fotter/Fotter";
import FotterMenu from "./components/Fotter/FotterMenu";
import MobileFooter from "./components/Fotter/MobileFooter";

import { Container } from "@mui/material";
import { displayOnDesktop } from "./theme/commonStyles";

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
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MobileFooter />
            </Box>
          </Container>
          ;
        </Box>
        <Box>
          <Box sx={displayOnDesktop}>
            <Footer />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FotterMenu />
        </Box>
      </Box>
    </>
  );
}

export default App;
