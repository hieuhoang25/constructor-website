import * as React from 'react';
import { Box, Container, Grid, Typography, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Cột 1: Giới thiệu công ty */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Công Ty TNHH Kiến Trúc Xây Dựng Thiên Đăng
            </Typography>
            <Typography variant="body2">
              "Xây niềm in vững, dựng uy tín vàng"
            </Typography>
          </Grid>

          {/* Cột 2: Thông tin liên hệ */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Thông Tin Liên Hệ
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <BusinessIcon fontSize="small" />
                <Typography variant="body2">MST: 0318402208</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">
                  431 Tô Hiến Thành, P.14, Q.10, TP.HCM
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">(+84) 984 097 889</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2">contact@thien-dang.vn</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Cột 3: Mạng xã hội */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Kết Nối Với Chúng Tôi
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton        href={process.env.REACT_APP_PHONE_NUMBER} color="primary" sx={{ bgcolor: 'white' }}>
                 <PhoneIcon />
              </IconButton>
              <IconButton     href={process.env.REACT_APP_FACE_BOOK_PAGE} color="primary" sx={{ bgcolor: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton      href={process.env.REACT_APP_ZALO_CHAT}color="primary" sx={{ bgcolor: 'white' }}>
                <MessageIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Dòng bản quyền */}
        <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid gray' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Thiên Đăng Architecture. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
