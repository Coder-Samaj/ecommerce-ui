import { Box, TextField, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {

  const [user,setUser] = useState({
    username:"",
    password:""
  });

  function handleChange(e){
    console.log(e.target.name);
    setUser((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }
  
  function handleLogin(e){
    e.preventDefault();
    if(!user.username || !user.password){
      alert("Please fill in all fields");
      return
    }
    let obj={
      username:user.username,
      password:user.password
    }
    setUser({
      username:"",
      password:""
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
          "radial-gradient(circle at top left, #6366F1, transparent 40%), radial-gradient(circle at bottom right, #06B6D4, transparent 40%), #0F172A",
      }}
    >
      <Paper
        sx={{
          width: 380,
          p: 4,
          borderRadius: "20px",

          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",

          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ textAlign: "center", mb: 3, color: "#fff" }}
        >
          Welcome Back 👋
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            variant="outlined"
            sx={inputStyle}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            variant="outlined"
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
              "&:hover": {
                boxShadow: "0 8px 25px rgba(99,102,241,0.5)",
              },
            }}
          >
            Login
          </Button>

          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              color: "#CBD5F5",
              fontSize: 14,
            }}
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              Register
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
    color: "#aaa",
  },
};

export default LoginPage;
