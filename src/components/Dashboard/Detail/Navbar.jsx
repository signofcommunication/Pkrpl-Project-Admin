import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";

function Navbar({ id }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Link to={`/product/${id}/edit`} style={{ textDecoration: "none" }}>
            <Button color="success" variant="contained">
              Edit
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
