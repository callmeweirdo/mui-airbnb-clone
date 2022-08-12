import React from "react";
import { Button, Container, Box, Paper, Link } from "@mui/material";

// react icons
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";

import {
  flexBetween,
  justifyCenter,
  fullWidthFlex,
  flexBetweenCenter,
} from "../../theme/commonStyles";
import { Stack } from "@mui/system";

const footerLinks = [
  { id: 1, text: "privacy", url: "#" },
  { id: 1, text: "Terms", url: "#" },
  { id: 1, text: "site map", url: "#" },
  { id: 1, text: "Destination", url: "#" },
];

const Fotter = () => {
  return (
    <>
      <Box sx={{ ...fullWidthFlex, bordertop: "1px solid #ddd" }}>
        <Container maxWidth="xl">
          <Box sx={{ ...flexBetweenCenter, width: "100%" }}>
            <Stack>
              <Paper>
                <Link href="#">2022 Aribnb copyright By Og weirdo</Link>
              </Paper>
              {footerLinks.map((link) => (
                <Paper key={link.id}>
                  <Link href={link.url}>{link.text}</Link>
                </Paper>
              ))}
            </Stack>
            <Stack>
              <Paper sx={justifyCenter}>
                <Button>
                  <Box sx={{ ...justifyCenter, mr: 1 }}>
                    <BsGlobe size={24} />
                  </Box>
                  English (CA)
                </Button>
                <Button>$LonDon</Button>
                <Button>
                  Support & Resource
                  <Box sx={{ ...justifyCenter, ml: 1 }}>
                    <IoChevronUpOutline size={24} />
                  </Box>
                </Button>
              </Paper>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Fotter;
