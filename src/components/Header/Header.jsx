import React from "react";
import { Box, Container } from "@mui/material";

// components import
import Logo from "./Logo";
import { dFlex, flexBetweenCenter } from "../../theme/commonStyles";
import LocationSearch from "./LocationSearch";
import ProfileSettings from "./ProfileSettings";

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #0dd ",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 70,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
          <ProfileSettings />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
