import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import {
  Container, Typography, Tabs, Tab, Box, Switch, FormControlLabel, 
  MenuItem, Select, InputLabel, FormControl, Button, TextField, Grid
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SecurityIcon from "@mui/icons-material/Security";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";

export default function Settings() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [tabIndex, setTabIndex] = useState(0);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex", mt: 5 }}>
        <Sidenav />
        <Box component="main" sx={{ width: "100%" }}>
          <Container sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? "#1a1a2e" : "#fff" }}>
            <Typography variant="h4" gutterBottom>Settings</Typography>

            {/* Tabs Navigation */}
            <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)} indicatorColor="primary" textColor="primary">
              <Tab label="Theme" icon={<DarkModeIcon />} />
              <Tab label="Notifications" icon={<NotificationsActiveIcon />} />
              <Tab label="Privacy" icon={<SecurityIcon />} />
              <Tab label="Profile" icon={<AccountCircleIcon />} />
              <Tab label="Security" icon={<LockIcon />} />
            </Tabs>

            <Box sx={{ mt: 3 }}>
              {/* Theme Settings */}
              {tabIndex === 0 && (
                <Box>
                  <Typography variant="h6">Theme Settings</Typography>
                  <FormControlLabel control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />} label="Enable Dark Mode" />
                </Box>
              )}

              {/* Notifications Settings */}
              {tabIndex === 1 && (
                <Box>
                  <Typography variant="h6">Notification Preferences</Typography>
                  <FormControlLabel control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />} label="Enable Notifications" />
                </Box>
              )}

              {/* Privacy Settings */}
              {tabIndex === 2 && (
                <Box>
                  <Typography variant="h6">Privacy Settings</Typography>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Preferred Language</InputLabel>
                    <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value="Spanish">Spanish</MenuItem>
                      <MenuItem value="French">French</MenuItem>
                    </Select>
                  </FormControl>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Changes</Button>
                </Box>
              )}

              {/* Profile Settings */}
              {tabIndex === 3 && (
                <Box>
                  <Typography variant="h6">Profile Settings</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                  </Grid>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Changes</Button>
                </Box>
              )}

              {/* Security Settings */}
              {tabIndex === 4 && (
                <Box>
                  <Typography variant="h6">Security Settings</Typography>
                  <Button variant="outlined" color="secondary">Enable Two-Factor Authentication</Button><br />
                  <Button variant="contained" color="error" sx={{ mt: 2 }}>Reset Password</Button>
                </Box>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}