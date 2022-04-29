import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const theme = createTheme();
const authenticatedUser = {
  email: "task@gmail.com",
  password: "12345678",
};
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    isValidEmail: "",
    password: "",
    isPasswordVisible: false,
  });
  const handleSignin = (event) => {
    if (formData.password.length < 8) {
      return alert("Password must have 8 Characters");
    }
    if (
      JSON.stringify({ email: formData.email, password: formData.password }) ===
      JSON.stringify(authenticatedUser)
    ) {
      localStorage.setItem("userDetails", JSON.stringify(formData));
      navigate("/dashboard");
    } else {
      alert("unauthenticated user");
    }
  };
  return (
    <>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              error={
                formData.email.length
                  ? !new RegExp(
                      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
                    ).test(formData.email)
                  : false
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={formData.isPasswordVisible ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(e) =>
                      setFormData({
                        ...formData,
                        isPasswordVisible: !formData.isPasswordVisible,
                      })
                    }
                    edge="end"
                  >
                    {formData.isPasswordVisible ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                ),
              }}
            />
            <span
              style={{ color: formData.password.length > 7 ? "green" : "red" }}
            >
              Have at least 8 characters
            </span>
            <Button
              onClick={handleSignin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={formData.email && formData.password ? false : true}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        assignment
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
