import * as React from 'react';
import Fab from '@mui/material/Fab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
//import ZaloIcon from './ZaloIcon'; // Tạo icon Zalo tùy chỉnh

export default function SpeedDialBasic() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        {/* Icon tùy chỉnh cho Speed Dial */}
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={() => window.open('https://www.facebook.com/messages')}>
          <FacebookIcon />
          Facebook
        </MenuItem>
        <MenuItem onClick={() => window.open('https://www.google.com/messages')}>
          <MessageIcon />
          Message
        </MenuItem>
        {/* <MenuItem onClick={() => window.open('https://chat.zalo.me')}>
          <ZaloIcon />
          Zalo
        </MenuItem> */}
      </Menu>
    </div>
  );
}