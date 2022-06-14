import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container maxWidth="md">
      <Typography
        color="primary"
        sx={{
          display: 'flex',
          height: '5rem',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Made by Alexandre Noguez
      </Typography>
    </Container>
  );
}

export default Footer;
