import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../appStore';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import PieChartIcon from '@mui/icons-material/PieChart';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const drawerWidth = 240;

// Open and closed drawer styling
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create(['width', 'background-color'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create(['width', 'background-color'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.background.default,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Drawer header styling
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Drawer Component with transition
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

// Styled ListItem for hover and active state
const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: "linear-gradient(158deg, rgb(61, 48, 129) 0%, rgba(30,47,141,1) 100%)",
    color: "#ffffff",
    boxShadow: `0 4px 8px ${theme.palette.secondary.main}`,
  },
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: `0 4px 8px ${theme.palette.primary.dark}`,
  },
}));

// Styled ListItemIcon for smooth hover effect
const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.common.white, // Using common.white for better compatibility
    transform: 'rotate(10deg) scale(1.1)',
  },
}));

export default function Sidenav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => updateOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { label: 'Home', icon: <HomeIcon />, path: '/home' },
            { label: 'Upload', icon: <CloudUploadIcon />, path: '/upload' },
            { label: 'Charts', icon: <PieChartIcon />, path: '/chart' },
            { label: 'About', icon: <InfoIcon />, path: '/about' },
            { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
          ].map(({ label, icon, path }, index) => (
            <ListItem disablePadding key={index} sx={{ display: 'block' }} onClick={() => navigate(path)}>
              <ListItemButtonStyled
                sx={{
                  minHeight: 50,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIconStyled sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  {icon}
                </ListItemIconStyled>
                <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}