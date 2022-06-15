import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../../shared/Components/Header';
import Footer from '../../shared/Components/Footer';

function Profile() {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ height: '70vh' }}>Perfil</Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Profile;
