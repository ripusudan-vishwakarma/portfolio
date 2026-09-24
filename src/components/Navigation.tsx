import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [
  ['Home', '/'],
  ['Profile', '/profile'],
  ['Articles', '/articles']
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const navScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(navScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box className="navigation-bar-responsive" sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box className="mobile-menu-header">
        <Box className="mobile-menu-top"><ListIcon fontSize="small" />Menu</Box>
        <IconButton aria-label="close menu" onClick={handleDrawerToggle} size="small" className="mobile-menu-close">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <List className="mobile-nav-list" sx={{ px: 1.5, py: 1.5 }}>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding sx={{ mb: 0.8 }}>
            <ListItemButton className="mobile-nav-button" onClick={() => handleNavigate(item[1])}>
              <ListItemText primary={item[0]} primaryTypographyProps={{ fontWeight: 600, letterSpacing: '0.02em' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()} />
          ) : (
            <DarkModeIcon onClick={() => modeChange()} />
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} component={Link} to={item[1]} sx={{ color: '#fff' }}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'linear-gradient(180deg, rgba(15, 23, 33, 0.98), rgba(17, 24, 39, 0.96))',
              borderLeft: '1px solid rgba(148, 163, 184, 0.18)',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;