import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup =()=>{

const [auth1,setAuth1]=useState({
      userName1:"",
      mobileNumber:"",
      password:"",
      conformPassword:""

});


const handleSignup = () => {
    axios.post("http://localhost:8000/signup", auth1)
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.response.data.detail));
  };




const handleChange1 = (event) =>{
  const {value,name}=event.target;
  setAuth1({...auth1,[name]:value});
}
console.log(auth1);

    return(
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
              <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
                <Typography variant="h5" align="center" gutterBottom>
                  Signup
                </Typography>
                <TextField 
                  fullWidth 
                  label="UserName" 
                  name="userName1"
                  value={auth1.userName1}
                  onChange={(event)=>{handleChange1(event)}}
                  variant="outlined" 
                  margin="normal"
                  
                />
                 <TextField 
                  fullWidth 
                  label="mobileNumber" 
                  name="mobileNumber"
                  value={auth1.mobileNumber}
                  onChange={(event)=>{handleChange1(event)}}
                  type="password" 
                  variant="outlined" 
                  margin="normal"
                />
                <TextField 
                  fullWidth 
                  label="Password" 
                  name="password"
                  value={auth1.password}
                  onChange={(event)=>{handleChange1(event)}}
                  type="password" 
                  variant="outlined" 
                  margin="normal"
                />
                 <TextField 
                  fullWidth 
                  label="ConformPassword" 
                  name="conformPassword"
                  value={auth1.conformPassword}
                  onChange={(event)=>{handleChange1(event)}}
                  type="password" 
                  variant="outlined" 
                  margin="normal"
                />
                <Button 
                onClick={handleSignup}
                  fullWidth 
                  variant="contained" 
                  color="primary" 
                  sx={{ marginTop: 2 }}
                >
                  Submit
                </Button>
                 <Typography variant="body2">Already haven account? &emsp;<Link to="/">Login</Link></Typography>
              </Paper>
            </Box>
    )
}

export default Signup;