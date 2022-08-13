import React from "react";
import { Stack, Button, Box, Typography } from "@mui/material";

import {
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
  FaRegUser,
} from "react-icons/fa";

const footerMenu = [
  { id: 1, text: "Explore", icon: <FaSearch size={15} /> },
  { id: 2, text: "WishList", icon: <FaRegUser size={15} /> },
  { id: 3, text: "Login", icon: <FaRegUserCircle size={15} /> },
];

const FotterMenu = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
        <Stack>
          {footerMenu.map((item) => (
            <Button key={item.id}>
              <Stack
                sx={{ justifyContent: "center", alignItems: "center" }}
                direction="column"
                spacing={1}
              >
                {item.icon}
                <Typography>{item.text}</Typography>
              </Stack>
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default FotterMenu;
