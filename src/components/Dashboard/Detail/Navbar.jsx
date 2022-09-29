import { useNavigate, Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";
import { useProvider } from "../../../utils/FirebaseProvider";

function Navbar({ id }) {
  const { deleteProduct } = useProvider();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await deleteProduct(id);
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
          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
