import * as React from 'react';
import { Container, Grid, Typography, Card } from '@mui/material';

export default function HighlightsLastYear() {
  return (
    <Container id="highlights-lastyear" sx={{ py: { xs: 2, sm: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        {/* Tiêu đề bên trái */}
        <Grid item xs={12} md={6}>
          <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
            Điểm lại 2024
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cùng nhìn lại những dấu ấn nổi bật của <b> Thiên Đăng </b>  trong năm 2024 – 
            một hành trình của sự phát triển, đổi mới và những công trình đáng tự hào.
          </Typography>
        </Grid>

        {/* Video bên phải */}
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              p: 0,
            }}
          >
            <video
              controls
              width="100%"
              style={{ borderRadius: '8px' }}
              poster="/image1.jpg" // hình hiển thị trước khi play (tùy chọn)
            >
              <source src="/videos/highlights-2024.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
