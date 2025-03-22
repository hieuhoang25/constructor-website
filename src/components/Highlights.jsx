import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const projects = [
  {
    id: 1,
    title: 'Dự án Nhà Phố Hiện Đại',
    description: 'Một thiết kế nhà phố hiện đại với không gian mở.',
    images: [
      'https://picsum.photos/600/400?random=1',
      'https://picsum.photos/600/400?random=2',
      'https://picsum.photos/600/400?random=3'
    ],
  },
  {
    id: 2,
    title: 'Biệt Thự Sang Trọng',
    description: 'Biệt thự cao cấp với nội thất sang trọng và hiện đại.',
    images: [
      'https://picsum.photos/600/400?random=4',
      'https://picsum.photos/600/400?random=5',
      'https://picsum.photos/600/400?random=6'
    ],
  },
  {
    id: 3,
    title: 'Công Trình Văn Phòng',
    description: 'Văn phòng làm việc với thiết kế xanh và tiết kiệm năng lượng.',
    images: [
      'https://picsum.photos/600/400?random=7',
      'https://picsum.photos/600/400?random=8',
      'https://picsum.photos/600/400?random=9'
    ],
  },
  {
    id: 4,
    title: 'Dự án Nhà Phố Hiện Đại',
    description: 'Một thiết kế nhà phố hiện đại với không gian mở.',
    images: [
      'https://picsum.photos/600/400?random=1',
      'https://picsum.photos/600/400?random=2',
      'https://picsum.photos/600/400?random=3'
    ],
  },
  {
    id: 5,
    title: 'Biệt Thự Sang Trọng',
    description: 'Biệt thự cao cấp với nội thất sang trọng và hiện đại.',
    images: [
      'https://picsum.photos/600/400?random=4',
      'https://picsum.photos/600/400?random=5',
      'https://picsum.photos/600/400?random=6'
    ],
  },
  {
    id: 6,
    title: 'Công Trình Văn Phòng',
    description: 'Văn phòng làm việc với thiết kế xanh và tiết kiệm năng lượng.',
    images: [
      'https://picsum.photos/600/400?random=7',
      'https://picsum.photos/600/400?random=8',
      'https://picsum.photos/600/400?random=9'
    ],
  }
];


export default function Highlights() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}  id="highlights">
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Các Dự Án
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card sx={{ cursor: 'pointer' }} onClick={() => handleOpen(project)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.images[0]} 
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal hiển thị ảnh */}
      <Modal open={!!selectedProject} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            boxShadow: 24,
            p: 3,
            width: { xs: '90%', sm: '70%', md: '50%' },
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" mb={2}>
            {selectedProject?.title}
          </Typography>

          <Swiper navigation modules={[Navigation]} style={{ width: '100%', height: '300px' }}   cssMode={true} // Tạo cảm giác mượt hơn trên mobile
          pagination={{ clickable: true }}
          mousewheel={true} // Hỗ trợ cuộn bằng chuột
          keyboard={true} // Hỗ trợ điều khiển bằng bàn phím
          speed={500}
          loop={true}>
            {selectedProject?.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Modal>
    </Box>
  );
}
