import React from "react";
import { Box, Typography } from "@mui/material";

// react icons
import { FaAirbnb } from "react-icons/fa";
import { flexCenter } from "../../theme/commonStyles";
import { pink } from "@mui/material/colors";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        airBnbs
      </Typography>
    </Box>
  );
};

export default Logo;
