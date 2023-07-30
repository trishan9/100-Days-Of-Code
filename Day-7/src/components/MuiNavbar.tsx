import {
  AppBar,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MuiDrawer from "./MuiDrawer";

const MuiNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{ marginRight: "20px" }}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <MuiDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

        <IconButton color="inherit">
          <AlternateEmailIcon />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Threads
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">
            <Link color="inherit" underline="none">
              Features
            </Link>
          </Button>
          <Button color="inherit">
            <Link color="inherit" underline="none">
              Pricing
            </Link>
          </Button>
          <Button color="inherit">
            <Link color="inherit" underline="none">
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link color="inherit" underline="none">
              Login
            </Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
