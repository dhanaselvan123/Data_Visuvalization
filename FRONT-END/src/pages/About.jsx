import React from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import { Box, Typography, Card, CardContent, Avatar, Grid, Button } from "@mui/material";
import p1 from "../images/img_1.jpg" 
import p2 from "../images/img_2.jpg" 
import p3 from "../images/img_3.jpg"
import p4 from "../images/img_4.jpg" 





export default function About() {
  const teamMembers = [
    { name: "DHANASELVAN", role: "Python Full Stack Developer", img:p2 },
    { name: "SHARMILA", role: "Front-End Developer", img: p4 },
    { name: "MEERAN", role: "Python Full Stack Developer", img:p1  },
    { name: "DHINA", role: "Python Full Stack Developer", img: "/static/jane.png" },
    { name: "TAMILARASI", role: "Python Full Stack Developer", img: p3 },
  ];

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex",mt: 5 }}>
        <Sidenav />
        <Box component="main" sx={{ width: "100%" }}>
          {/* ABOUT SECTION */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            sx={{
              minHeight: "100vh",
              background: "linear-gradient(120deg, #ece9e6, #ffffff)",
              textAlign: "center",
            }}
          >
            <Card sx={{ maxWidth: 1400, height: 150, mb: 4, boxShadow: 6, transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
              <CardContent>
                <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom sx={{ animation: "fadeIn 1s ease-in-out" }}>
                  About Us
                </Typography>
                <Typography variant="body1">
                  Welcome to our Data Visualization platform! We aim to make data more accessible and insightful through intuitive graphical representations. Our platform empowers professionals, businesses, and developers to transform raw data into meaningful insights.
                </Typography>
              </CardContent>
            </Card>

            {/* MISSION SECTION */}
            <Card sx={{ maxWidth: 1400, mb: 4, p: 4, boxShadow: 4,"&:hover": { transform: "scale(1.02)" } }}>
              <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                - Make data more understandable for everyone.  
                - Provide intuitive and powerful visual analytics tools.  
                - Help businesses make data-driven decisions with confidence.  
                - Build an innovative and user-friendly experience.
              </Typography>
            </Card>

            {/* TEAM SECTION */}
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom sx={{ animation: "fadeIn 1.2s ease-in-out" }}>
              Meet Our Team
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item key={index}>
                  <Card sx={{
                    maxWidth: 250,
                    p: 3,
                    boxShadow: 6,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.3)"
                    }
                  }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Avatar src={member.img} sx={{ width: 100, height: 100, mb: 2 }} />
                      <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                      <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* CONTACT US SECTION */}
            <Card sx={{ maxWidth: 1400, mt: 5, boxShadow: 4, p: 3, textAlign: "center","&:hover": { transform: "scale(1.02)" } }}>
              <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1">
                Have any questions? We'd love to hear from you!
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2,background: "linear-gradient(158deg, rgb(61, 48, 129) 0%, rgba(30,47,141,1) 100%)" }}>
                Get In Touch
              </Button>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}