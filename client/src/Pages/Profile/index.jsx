import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Footer from '../../shared/Components/Footer';

function Profile() {

  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{ height: '70vh' }}>Perfil
          <Typography>Meu Perfil</Typography>
        </Box>
      </Container >
      <Footer />
    </Box >
  );
}

export default Profile;
