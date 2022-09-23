import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { useProvider } from "../../../../utils/FirebaseProvider";

function Navbar() {
  const { updateId } = useProvider();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/product/${updateId}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
