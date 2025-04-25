import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Forgot = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    userName: "",
    password: "",
    conformPassword: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAuth({ ...auth, [name]: value });
  };

  const handleForgot = () => {
    axios.post("http://localhost:8000/forgot-password", auth)
      .then(res => {
        alert(res.data.message);
        navigate("/login"); // optional: redirect after success
      })
      .catch(err => {
        console.log(err);
        alert(err?.response?.data?.detail || "Something went wrong");
      });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <TextField
          fullWidth
          label="Username"
          name="userName"
          value={auth.userName}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="New Password"
          name="password"
          value={auth.password}
          onChange={handleChange}
          type="password"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirm Password"
          name="conformPassword"
          value={auth.conformPassword}
          onChange={handleChange}
          type="password"
          variant="outlined"
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleForgot}
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
        <Typography variant="body2" align="center" mt={2}>
          Don't have an account? <Link to="/signup">Signup</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Forgot;
