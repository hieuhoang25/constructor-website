
import { Box, Container, Grid, Typography, TextField, Button, Stack, CircularProgress, Snackbar, Alert } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


export default function ContactSection() {

   const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
   const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
   const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;

  // console.log({serviceId:serviceId, templateId: templateId,  userId: userId})

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });


  const [loading, setLoading] = useState(false); // Trạng thái gửi mail

  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' }); // Trạng thái Toast


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Hiện trạng thái loading
    emailjs
      .send(
        serviceId,  // Lấy từ EmailJS
        templateId, // Lấy từ EmailJS
        form,
       userId  // Lấy từ EmailJS
      )
      .then(() => {
        setToast({ open: true, message: 'Gửi mail thành công!', severity: 'success' });
        setForm({ name: '', email: '',  phone: '', message: '' }); // Reset form
      })
      .catch((err) => {
        setToast({ open: true, message: 'Lỗi gửi mail, vui lòng thử lại!', severity: 'error' });
      })
      .finally(() => setLoading(false)); // Ẩn trạng thái loading
  };

  return (
  <Box sx={{ bgcolor: '#f8f9fa', py: 8 }} id="pricing">
      <Container>
        <Grid container spacing={4}>
          {/* Cột 1: Thông tin liên hệ */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Liên Hệ Với Chúng Tôi
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, đừng ngần ngại liên hệ với chúng tôi!
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon color="primary" />
                <Typography variant="body2">
                  431 Tô Hiến Thành, P.14, Q.10, TP.HCM
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon color="primary" />
                <Typography variant="body2">(+84) 984 097 889</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon color="primary" />
                <Typography variant="body2">contact@thien-dang.vn</Typography>
              </Stack>
            </Stack>

            {/* Google Maps */}
            <Box mt={3} sx={{ width: '100%', height: '300px', borderRadius: 2, overflow: 'hidden' }}>
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.482103296477!2d106.66767637409506!3d10.774708959280846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed9e5e54473%3A0x3e85e6cddb2b24b2!2zNDMxIMSQLiBUw7QgSGnhu4d0IFRow6BuaCwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBIw7JhIE3hu5luaA!5e0!3m2!1sen!2s!4v1710912134593"
              ></iframe>
            </Box>
          </Grid>

          {/* Cột 2: Form liên hệ */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} autoComplete="off" sx={{ bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h5" gutterBottom>
                Gửi Tin Nhắn Cho Chúng Tôi
              </Typography>

              {/* Input: Họ và Tên */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontSize={14}>Họ và Tên</Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="Nhập họ và tên của bạn"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': { fieldset: { borderColor: 'transparent' } }
                  }}
                />
              </Box>

              {/* Input: Email */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontSize={14}>Email</Typography>
                <TextField
                  fullWidth
                  required
                  type="email"
                  placeholder="Nhập email của bạn"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': { fieldset: { borderColor: 'transparent' } }
                  }}
                />
              </Box>

              {/* Input: Số Điện Thoại */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontSize={14}>Số Điện Thoại</Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="Nhập số điện thoại của bạn"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': { fieldset: { borderColor: 'transparent' } }
                  }}
                />
              </Box>

              {/* Input: Nội Dung */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontSize={14}>Nội Dung</Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="Nhập nội dung tin nhắn của bạn"
                  multiline
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': { fieldset: { borderColor: 'transparent' } }
                  }}
                />
              </Box>

          {/* Button gửi */}
          <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 2 }} 
                disabled={loading} // Chặn nhấn khi đang gửi
              >
                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : "Gửi Tin Nhắn"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar 
  open={toast.open} 
  autoHideDuration={3000} 
  onClose={() => setToast({ ...toast, open: false })}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Đặt vị trí
>
  <Alert 
    onClose={() => setToast({ ...toast, open: false })} 
    severity={toast.severity} 
    sx={{ width: '100%' }}
  >
    {toast.message}
  </Alert>
</Snackbar>

    </Box>
  );
}