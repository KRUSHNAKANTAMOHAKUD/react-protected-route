import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  const handleLogout =()=>{
    localStorage.removeItem('userDetails')
    navigate('/login')
  }
  React.useEffect(() => {
  }, [userData && userData.email]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Assignment
          </Typography>
          {userData && userData.email ? (
            <Button color="inherit" onClick={handleLogout}>LOGOUT</Button>
          ) : (
            <Button color="inherit">SIGN IN</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
