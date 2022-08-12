import React, { useState } from "react";
import { Box, Tabs, Button, Container, Tab } from "@mui/material";

// react icons
import { FaFilter } from "react-icons/fa";
import { locationsTab } from "../../data/mock-data";

const OptionsTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ height: "100%", mb: 1 }}>
      <Box sx={{ display: "flex", flexGrow: 1, px: { xs: 0, md: 2 } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
        >
          {locationsTab.map((tab) => (
            <Tab key={tab.id} icon={tab.icon} label={tab.label} />
          ))}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            border: "1px solid #ddd",
            maxwidth: 90,
            justifyContent: "space-around",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "theme.palette.text.primary",
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  );
};

export default OptionsTab;
