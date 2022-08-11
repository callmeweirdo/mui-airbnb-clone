import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";

import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IconBase } from "react-icons";

const MobileSearch = () => {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        border: "1px solid #ccc ",
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ padding: "10px" }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to ?" />
      <IconButton type="submit" sx={{ padding: "10px" }}>
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
