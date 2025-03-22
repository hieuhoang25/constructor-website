
import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Build, HomeWork, Factory, DesignServices } from '@mui/icons-material';

const services = [
  {
    icon: <HomeWork sx={{ fontSize: 50, color: '#fb0407' }} />,
    title: 'Thiết Kế Kiến Trúc',
    description: 'Chúng tôi cung cấp dịch vụ thiết kế nhà phố, biệt thự, văn phòng hiện đại và tối ưu công năng.',
  },
  {
    icon: <Build sx={{ fontSize: 50, color: '#0101fd' }} />,
    title: 'Thi Công Xây Dựng',
    description: 'Thi công trọn gói công trình dân dụng và công nghiệp, đảm bảo chất lượng và tiến độ.',
  },
  {
    icon: <Factory sx={{ fontSize: 50, color: '#ff9800' }} />,
    title: 'Xây Dựng Nhà Xưởng',
    description: 'Thiết kế và thi công nhà xưởng, kho bãi, khu công nghiệp với giải pháp tối ưu.',
  },
  {
    icon: <DesignServices sx={{ fontSize: 50, color: '#4caf50' }} />,
    title: 'Tư Vấn & Giám Sát',
    description: 'Cung cấp dịch vụ tư vấn thiết kế, giám sát công trình để đảm bảo chất lượng tốt nhất.',
  },
];

export default function Testimonials() {
  return (
    <Container id="testimonials" sx={{ py: { xs: 4, sm: 10 }, textAlign: 'center' }}>
    <Typography variant="h4" color="text.primary" sx={{ mb: 4, fontWeight: 'bold' }}>
      Dịch Vụ Của Chúng Tôi
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%', // ✅ Đảm bảo chiều cao card đồng đều
              p: 3,
              textAlign: 'center',
              transition: '0.3s',
              '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>{service.icon}</Box>
            <CardContent sx={{ flexGrow: 1 }}> {/* ✅ Đảm bảo nội dung cân đối */}
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}
