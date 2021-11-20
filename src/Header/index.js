import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import theme from "../theme";

import { useNavigate, NavLink } from "react-router-dom";

function Header() {
  // let navigate = useNavigate();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   // navigate("/");
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Button
            color="inherit"
            onclick={<NavLink exact activeClassName="active" to="/" />}
          >
            Home
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Balaraju" src="../static/images/butterfly.jpg" />
          </Stack>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
