import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import Logout from "../../Logout/Logout";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="navbarcolor"
        sx={{
          height: "8vh",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <LiveTvIcon />
          </IconButton>
          <Typography
            color="#FFF"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Helvetica",
              fontWeight: 500,
            }}
          >
            Gopi Krishna
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
