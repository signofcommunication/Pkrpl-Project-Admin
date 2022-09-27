import { useNavigate, Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";
import axios from "axios";

function Navbar({ id }) {
  const navigate = useNavigate();

  async function deleteProduct() {
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      alert("Product deleted successfully");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Button color="error" variant="contained" onClick={deleteProduct}>
            Delete
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
