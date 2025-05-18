import * as React from 'react';
import Fab from '@mui/material/Fab';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
    //  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.2) 0%, transparent 80%)',
      animation: '$pulse 1s infinite',
    },
    '@keyframes pulse': {
      '0%': {
        transform: 'scale(0.9)',
      },
      '50%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0.9)',
      },
    },
  }));
  
export default function FixedOptions() {
    const classes = useStyles();


  return (
    <div style={{ position: 'fixed', zIndex : '10000', bottom: 20, right: 20, display: 'flex', flexDirection: 'column' ,  gap: '10px'}}>
            <div className={classes.container}>
            <Fab color="primary" aria-label="phone" className={classes.button}   
            component="a"
                href={process.env.REACT_APP_PHONE_NUMBER}
  >
        <PhoneIcon />
      </Fab>
        </div>
        <div className={classes.container}>
      <Fab  color="primary"
           aria-label="facebook"
           component="a"
           href={process.env.REACT_APP_FACE_BOOK_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          >
        <FacebookIcon />
      </Fab>
      </div>
      <div className={classes.container}>
      <Fab color="primary" aria-label="message" 
      component = "a"
        href={process.env.REACT_APP_ZALO_CHAT}
      target="_blank"
    el="noopener noreferrer"
      >
        <MessageIcon />
      </Fab>
      </div>
      {/* <Fab color="primary" aria-label="zalo">
        <ZaloIcon />
      </Fab> */}
    </div>
  );
}