import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles((theme) => ({
  customContainer: {
   
    '&.MuiContainer-maxWidthLg': {
      // Specific styles for maxWidthLg
    },
    '&.css-1oqqzyl-MuiContainer-root' : {
      'max-width': '100%',
            'padding-left': '0px',
         'padding-right': '0px',
    }
    ,
    '&.css-1yiqbh0' : {
      'padding-left': '1000px',
      'padding-right': '0px',
    }
  },
}));

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 80;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
        }}
      >
        <Container 
        className={classes.customContainer}
        >
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'align-items',
              justifyContent: 'space-between',
              flexShrink: 0,
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ml: '-18px',
                px: 0,
              }}
            >
                      <Box sx={{ display:'flex' , alignItems: 'center' }}>
                <img
                  src="/logo.png"
                  style={{ height: 60 }}
                  alt="Logo of Thiên Dăng"
                />
                <Typography
                  variant="h7"
                  color="#0101fd"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: `'Times New Roman', Times, serif`,
                  }}
                >
                  CÔNG TY TNHH KIẾN TRÚC XÂY DỰNG THIÊN ĐĂNG
                </Typography>
              </Box>

              
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary"    sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Giới thiệu
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('testimonials')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Dịch vụ
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('highlights')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Dự án
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('pricing')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Liên hệ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >

                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}  sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Giới thiệu
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}  sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Dịch vụ
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')} sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Dự án
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')} sx={{
                    fontWeight: 'bold',
                    // fontFamily: `'Times New Roman', Times, serif`,
                  }}>
                    Liên hệ
                  </MenuItem>
                  
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;