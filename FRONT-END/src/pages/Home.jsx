import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from "@mui/material/Box";
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BarChart from '../charts/BarChart';
import { ScatterChart } from '../charts/ScatterChart';
import CountUp from 'react-countup';


export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx= {{ display: 'flex' }} >
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                    <CardContent>
                      <div className='iconstyle'>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: " #f0fcfc" }}>
                        $<CountUp delay={0.4} end={500} duration={1} />
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" color='text.secondary' sx={{ color: " #ccd1d1" }}>
                        Total Earning
                      </Typography>

                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 49 + "%", height: 140 }} className ='gradientlight'>

                    <div className ='iconstyle'>
                      <ShoppingBagIcon />
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: " #f0fcfc" }} >
                        $<CountUp delay={0.4} end={900} duration={1} />
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" color='text.secondary' sx={{ color: " #ccd1d1" }}>
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack spacing={2}  >
                  <Card className="gradientlight" sx={{ color: " #f0fcfc" }}>
                    <Stack spacing={2} direction="row" className='gradientlight'>
                      <div className='iconstyle paddingall'>
                        <StorefrontIcon />
                      </div>
                      <div className ='paddingall'>
                        <span className='pricetitle fontwhite'>Rs.203k </span>
                        <br />
                        <span className='pricesubtitle fontlightgrey'>Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card>
                    <Stack spacing={2} direction="row" className='gradient' sx={{ color: " #f0fcfc" }}>
                      <div className='iconstyle paddingall'>
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className='pricetitle'>Rs.203k </span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className='pricetitle'>Company Performance</span>
                      <ScatterChart />
                    </div>
                    <Box height={10} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box >
      </div>
    </>
  );
}

