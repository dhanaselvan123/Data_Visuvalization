
import { Alert, Avatar, Box, Button, Paper, TextField, Typography } from "@mui/material"
// import AppBar from "../components/AppBar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Login = () => {

    const [auth, setAuth] = useState({
        userName: "",
        password: ""
    });

    const [alertMessage, setAlertMessage] = useState({
        message: "",
        status: "",
    })


    const [showAlert, setShowAlert] = useState(false);

    const [message, setMessage] = useState("");

    // const getInfo = () => {
    //     axios.get("http://localhost:8000/get").then((response) => {
    //         console.log(response.data);
    //         setMessage(response.data.message);
    //     });
    // };

    // useEffect(() => {
    //     console.log("Hi useEffect is working");
    //     getInfo();
    // });

    // useEffect(() => {
    //     console.log("UseEffect called");
    //     getInfo();
    // })

    const navigate = useNavigate();
    const handlelogin = () => {
        axios.post("http://localhost:8000/login", auth) // Send a POST request to the server with the auth object as the request body
            .then((response) => {
                const { message, status } = response.data; // Destructure the message and status from the response data
                setAlertMessage({ "message": message, "status": status }); // Update the alertMessage state with the new message and status
                setShowAlert(true); // Set showAlert to true to display the alert
                setTimeout(() => {
                    setShowAlert(false); // Hide the alert after 3 seconds
                }, 3000);
                if (status === "200") {
                    navigate("/home");
                } // If the status is 200, navigate to the dashboard page
            })
            .catch((err) => {
            });
    }

    const handleChange = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        // console.log(name, value);

        const { name, value } = event.target; // Destructuring assignment to extract name and value from event.target
        setAuth({ ...auth, [name]: value }); // Update the auth state with the new value for the corresponding name
    }

    console.log(auth); // Log the auth state to the console

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Paper
                elevation={3}
                sx={{
                    width: "25%",
                    height: "max-content",
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Avatar sx={{ bgcolor: 'green' }}>
                    <AccountCircleIcon />
                </Avatar>
                {showAlert ?
                    <Alert severity={alertMessage.status === "200" ? "success" : "warning"}>{alertMessage.message}</Alert> : undefined}

                <Typography>{message}</Typography>
                <Typography variant="h6">Log-In</Typography>
                <TextField id="outlined-basic" label="Username" name="userName" variant="outlined" value={auth.userName} onChange={(event) => { handleChange(event) }} fullWidth />
                <TextField id="outlined-basic" label="Password" name="password" variant="outlined" value={auth.password} onChange={(event) => { handleChange(event) }} type="password" fullWidth />
                <Box sx={{ width: "100%", textAlign: 'right' }}>
                    <Link to="/forgot">Forgot Password</Link>
                </Box>
                <Button variant="contained" fullWidth onClick={handlelogin}>Login</Button>
                <Typography variant="body2">Don't have an account?<Link to="/Signup">Signup</Link></Typography>
            </Paper>
        </Box>
    );
};

export default Login;