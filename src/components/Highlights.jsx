import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getImageListFromFirebase } from '../service/firebaseImageLoader';
const projects = [
  {
    id: 1,
    title: 'Nhà Phố Hiện Đại',
    description:
      'Thiết kế nhà phố tầng theo phong cách hiện đại, sử dụng tối đa ánh sáng tự nhiên, không gian mở kết nối giữa phòng khách và bếp, mang đến sự thông thoáng và tiện nghi cho gia chủ.',
    images: ['/nhapho.jpeg', '/nhapho1.jpg', '/nhapho2.jpg', '/nhapho3.jpg', '/nhapho4.jpg', '/nhapho5.jpg', '/nhapho6.jpg', '/nhapho7.jpg'],
  },
  // {
  //   id: 2,
  //   title: 'Biệt Thự Sang Trọng',
  //   description:
  //     'Biệt thự phong cách tân cổ điển với nội thất cao cấp, hồ bơi ngoài trời và sân vườn xanh mát – mang đến không gian sống đẳng cấp và tiện nghi cho gia đình nhiều thế hệ.',
  //   images: ['/bietthu.jpg', '/bietthu1.jpg', '/bietthu2.jpg', '/bietthu3.jpg', '/bietthu4.jpg'],
  // },
  {
    id: 3,
    title: 'Công Trình Văn Phòng',
    description:
      'Tòa nhà văn phòng tầng với thiết kế hiện đại, chú trọng đến hiệu suất năng lượng, thông gió tự nhiên, sử dụng vật liệu thân thiện với môi trường và tối ưu hóa không gian làm việc sáng tạo.',
    images: ['/vanphong.jpg', '/vanphong1.jpg', '/vanphong2.jpg'],
  },
  {
    id: 4,
    title: 'Nhà Xưởng, Nhà Máy',
    description:
      'Dự án nhà xưởng quy mô lớn với kết cấu thép tiền chế, bố trí khoa học giữa khu sản xuất và kho bãi, đảm bảo hiệu quả vận hành và đáp ứng tiêu chuẩn an toàn trong công nghiệp.',
    images: ['/nhaxuong.jpg', '/nhaxuong5.jpg', '/nhaxuong1.jpg', '/nhaxuong2.jpg', '/nhaxuong3.jpg', '/nhaxuong4.jpg', '/nhaxuong6.jpg', '/nhaxuong7.jpg'],
  }
];


export default function Highlights() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageList, setImageList] = useState([]);
  const touchStartX = useRef(0);
  const touchMoveX = useRef(0);
  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  useEffect(()=> {
    const fetchImages = async () => {
      const imagesFromFirebase = await  getImageListFromFirebase('images'); // folder name in Firebase Storage
      setImageList(imagesFromFirebase);
    
    }
      fetchImages();
  }, [])

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }} id="highlights">
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

  { imageList.length !== 0  && <>
    
<Typography variant="h5" textAlign="center" sx={{ py: 2 }}>
  Hình ảnh thực tế
</Typography>

<Box sx={{ position: 'relative', width: '100%', py: 2 }}>
  <IconButton
    onClick={() => {
      document.getElementById('image-row')?.scrollBy({ left: -300, behavior: 'smooth' });
    }}
    sx={{
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
      bgcolor: 'white',
      '&:hover': { bgcolor: 'grey.200' },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>

  <IconButton
    onClick={() => {
      document.getElementById('image-row')?.scrollBy({ left: 300, behavior: 'smooth' });
    }}
    sx={{
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
      bgcolor: 'white',
      '&:hover': { bgcolor: 'grey.200' },
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>

<Box
  id="image-row"
  sx={{
    display: 'flex',
    overflowX: 'hidden',
    gap: 2,
    px: 6,
    scrollBehavior: 'smooth',
  }}
  onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
  onTouchMove={(e) => (touchMoveX.current = e.touches[0].clientX)}
  onTouchEnd={() => {
    const delta = touchStartX.current - touchMoveX.current;
    if (Math.abs(delta) > 50) {
      const scrollBox = document.getElementById('image-row');
      if (scrollBox) {
        scrollBox.scrollBy({ left: delta > 0 ? 300 : -300, behavior: 'smooth' });
      }
    }
  }}
>
  {imageList.map((item, index) => (
    <Box key={index} sx={{ flexShrink: 0 }}>
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: 250,
          height: 180,
          objectFit: 'cover',
          borderRadius: 8,
        }}
      />
    </Box>
  ))}
</Box>
</Box>
  
  </>}

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
            width: { xs: '95%', sm: '80%', md: '70%' },
            maxHeight: '90vh',
            overflowY: 'auto',
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

          <Swiper
            navigation
            modules={[Navigation]}
            cssMode={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            speed={500}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          >
            {selectedProject?.images.map((img, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '50vh', sm: '60vh', md: '70vh' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Modal>
    </Box>
  );
}
