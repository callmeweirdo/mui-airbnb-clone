import React from "react";
import { Box, Stack, Paper, Button, Link } from "@mui/material";

// react icons
import { BsGlobe } from "react-icons/bs";
import { justifyCenter } from "../../theme/commonStyles";

const footerLinks = [
  { id: 1, text: "privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Siteman", url: "#" },
];

const MobileFooter = () => {
  return (
    <Box sx={{ borderTop: "1px solid #ccc", mt: 3, pt: 2, width: "100%" }}>
      <Paper>
        <Button>
          <Box sx={{ ...justifyCenter, mr: 1 }}>
            <BsGlobe size={24} />
          </Box>
          English ( $ )
        </Button>
        <Button> $$ 101 </Button>
      </Paper>
      <Stack sx={{ mt: 2 }}>
        <Paper>
          <Link href="#">2022 Airbnb Copyright</Link>
        </Paper>
      </Stack>
      <Stack sx={{ mt: 2 }}>
        {footerLinks.map((link) => (
          <Paper key={link.id}>
            <Link href={link.url}>{link.text}</Link>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileFooter;
