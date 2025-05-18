import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Features() {

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
      sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
    >
      <Card
        variant="outlined"
        sx={{
         height: '100%',
          width: '100%',
          display: 'flex',
          pointerEvents: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2
        }}
      >
        <img src="/logo3.png" alt="Thiên Đăng Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </Card>
    </Grid>
  </Grid>
</Container>

  );
}