import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { useProvider } from "../../../utils/FirebaseProvider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/logo-white.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useProvider();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloser = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nica-Store Dashboard
          </Typography> */}
          <img style={{ display: "flex", flexGrow: 1 }} src={logo} alt="logo" />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloser}
            >
              <MenuItem onClick={handleCloser}>
                <Link
                  to="/add-product"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Add Product
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
