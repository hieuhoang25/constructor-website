import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';
const images = [
  // Add your image URLs or components here
  '/image1.jpg',
  // '/image2.jpg',
  '/image5.png'
];

const useStyles = makeStyles((theme) => ({
  customContainer: {
   
    '&.MuiContainer-maxWidthLg': {
      // Specific styles for maxWidthLg
    },
    '&.css-qa5pbx-MuiContainer-root' : {
      'max-width': '100%',
            'padding-left': '0px',
         'padding-right': '0px',
    }
  },
}));
export default function Hero() {
  const classes = useStyles();

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          
          pt: { xs: 8},
          pb: { xs: 4 },
        }}
        className = {classes.customContainer}
      >
        <Box  sx={{ maxWidth: '100%', mx: 'auto' }}> {/* Optional styling */}
      <Carousel autoPlay interval={2000}>
        {images.map((image, index) => (
          <img  style={{ width: '100%', height :"550px" }}  key={index} src={image} alt= {image}  />
        ))}
      </Carousel>
    </Box>
      </Container>
    </Box>
  );
}