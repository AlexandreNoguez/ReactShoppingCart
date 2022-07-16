import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container maxWidth="md">
      <Typography
        color="primary"
        bgcolor="#e7e7e7"
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
