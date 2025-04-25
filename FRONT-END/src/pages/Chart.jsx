import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HbarChart from "../charts/HbarChart";
import CountUp from 'react-countup';

export default function Chart() {
    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack direction="row" spacing={2}>
                                    <Box sx={{ width: "50%" }}>
                                        <Card sx={{ height: 19 + "vh" }} className="gradient">
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    varient="p"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc", padding: "7px 0px" }}

                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc" }}
                                                >
                                                    <CountUp delay={0.2} end={22518} duration={0.3} />
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ color: " #ccd1d1" }}
                                                >
                                                    Since First Week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card
                                            sx={{ height: 19 + "vh", marginTop: "16px" }}
                                            className="gradient"
                                        >
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="p"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc", padding: "7px 0px" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc" }}
                                                >
                                                    <CountUp delay={0.4} end={32456} direction={0.5} />
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ color: " #ccd1d1" }}
                                                >
                                                    Since last weak
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ width: "50%", height: "50%" }}>
                                        <Card sx={{ height: 19 + "vh" }} className="gradientlight">
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="p"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc", padding: "7px 0px" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc" }}
                                                >
                                                    <CountUp delay={0.4} end={12987} duration={0.7} />
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    component="text.secondary"
                                                    sx={{ color: " #ccd1d1" }}
                                                >
                                                    Since last weak
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card
                                            sx={{ height: 19 + "vh", marginTop: "16px" }}
                                            className="gradientlight"
                                        >
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="p"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc", padding: "7px 0px" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: " #f0fcfc" }}
                                                >
                                                    <CountUp delay={0.5} end={12378} duration={0.9} />
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ color: " #ccd1d1" }}
                                                >
                                                    Since last weak
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={7}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent><HbarChart/></CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card xs={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    );
}
