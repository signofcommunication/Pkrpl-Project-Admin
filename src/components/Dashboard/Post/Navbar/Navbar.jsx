import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
