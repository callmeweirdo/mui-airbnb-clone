import React from "react";
import { Box, Stack, Divider, Typography, Paper, Button } from "@mui/material";

// react iicons and styles
import { IoSearchCircleSharp } from "react-icons/io5";
import { pink } from "@mui/material/colors";

const choices = [
  { id: 1, text: "Anywhere" },
  { id: 2, text: "Any week" },
  { id: 3, text: "Add guest", withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper sx={{ borderRadius: 20, ml: 15 }} elevation={3}>
      <Stack
        sx={{ borderRadius: 20, pl: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => (
          <Button key={choice.id}>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              {choice.text}
            </Typography>
            {choice.withIcon && (
              <Box>
                <IoSearchCircleSharp color={pink[500]} size={32} />
              </Box>
            )}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
