import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Divider
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    console.log(e.target.name);
    setUser((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  function handleRegister(e) {
    e.preventDefault();
    let obj = {
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    }

    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    console.log(obj);
  }

  return (
   <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background:
          "radial-gradient(circle at top right, #6366F1, transparent 40%), radial-gradient(circle at bottom left, #06B6D4, transparent 40%), #0F172A",
      }}
    >
      <Paper
        sx={{
          width: 420,
          p: 4,
          borderRadius: "20px",

          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",

          boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            textAlign: "center",
            mb: 1,
            color: "#fff",
          }}
        >
          Create Account 🚀
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#94A3B8",
            fontSize: 14,
            mb: 3,
          }}
        >
          Join and start shopping today
        </Typography>

        <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        <form onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            sx={inputStyle}
          />

          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 600,
              background:
                "linear-gradient(135deg,#6366F1,#06B6D4)",
              color: "#fff",
              fontSize: 16,
              letterSpacing: "0.5px",
              "&:hover": {
                boxShadow: "0 10px 30px rgba(99,102,241,0.5)",
              },
            }}
          >
            Register
          </Button>

          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              color: "#CBD5F5",
              fontSize: 14,
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

const inputStyle = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    color: "#fff",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },
    "&:hover fieldset": {
      borderColor: "#6366F1",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#94A3B8",
  },
};

export default RegisterPage;
