import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../../shared/Components/Header';
import Footer from '../../shared/Components/Footer';

function Profile() {
  return (
    <Container maxWidth="md">
      <Header />
      <Box sx={{ height: '70vh' }}>Perfil</Box>
      <Footer />
    </Container>
  );
}

export default Profile;
