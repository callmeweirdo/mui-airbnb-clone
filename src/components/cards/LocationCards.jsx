import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { locations as cardLocations } from "../../data/mock-data";
import CardCarousel from "./CardCarousel";

const LocationCards = () => {
  const [cards] = useState(cardLocations);

  if (!cards.length) {
    return null;
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => (
          <Grid item key={location.id} xs={12} sm={2} md={4} lg={3}>
            <CardCarousel location={location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationCards;
