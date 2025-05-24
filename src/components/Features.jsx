import * as React from 'react';
import  { useState } from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Features() {

  const [selectedImage, setSelectedImage] = useState(false);

  const handleOpen = () => {
    console.log("1212")
    setSelectedImage(true)
  }
  const handleClose = () => {
    setSelectedImage(false);
  }


  return (
<Container id="features" sx={{ py: { xs: 2, sm: 10 } }}>
  <Grid container spacing={6}>
    {/* Phần giới thiệu bên trái */}
    <Grid item xs={12} md={6}>
      <div>
        <Typography component="h2" variant="h4" color="text.primary" sx={{ pb : '2px' }}>
          Giới thiệu
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: { xs: 2, sm: 4 } }}
        >
          Công ty <b>TNHH Kiến Trúc Xây Dựng</b> 
          <b> Thiên Đăng </b> 
          được thành lập vào năm 2023 với sứ mệnh mang lại các giải pháp thiết kế kiến trúc 
          và xây dựng tối ưu, hiện đại và thân thiện với môi trường. Từ khi thành lập đến nay, 
          <b> Thiên Đăng </b> đã không ngừng phát triển và khẳng định vị thế trong ngành thông qua hàng loạt 
          dự án nổi bật ở nhiều lĩnh vực khác nhau như nhà ở, thương mại, công trình công cộng 
          và các dự án công nghiệp.
          <br />
          Công ty <b>TNHH Kiến Trúc Xây Dựng</b> 
          <b> Thiên Đăng </b>  
          cam kết sẽ luôn đồng hành cùng khách hàng từ những ý tưởng ban đầu đến khi dự án hoàn thiện, 
          đem lại sự hài lòng cao nhất. Với phương châm <b>"Xây niềm tin vững, dựng uy tín vàng"</b>, 
          <b> Thiên Đăng </b>  
          tin tưởng rằng mỗi công trình là một tác phẩm nghệ thuật, thể hiện niềm tự hào và tâm huyết của toàn bộ đội ngũ.
        </Typography>
      </div>
    </Grid>

    {/* Phần logo bên phải */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: { xs: 'flex', sm: 'flex' }, width: '100%' , height: '100%'}}
    >
      <Card
        variant="outlined"
        sx={{
          height: '500px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          cursor: 'pointer',
           '&:hover': {
      boxShadow: 'none',        // Remove shadow
      transform: 'none',        // Remove any transform
      backgroundColor: 'inherit', // Keep original background
            border: '1px solid rgba(214, 226, 235, 0.8)'
    }
        }}
       onClick={() => handleOpen()}
      >
        <img src="/certificate.jpeg" alt="Thiên Đăng Logo" style={{ maxWidth: '100%', height: '100%' }} />
      </Card>
    </Grid>

          {/* Modal hiển thị ảnh */}
    <Modal open={!!selectedImage} onClose={handleClose}>
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
                    src={"/certificate.jpeg"}
                    alt={`slide`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
        </Box>
          </Modal>
  </Grid>
</Container>

  );
}