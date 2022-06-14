import { Box, Container } from '@mui/material';
import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
// import MainRoutes from '../../../routes';

function LayoutBase() {
  return (
    <Container maxWidth="md">
      <Box>
        <Header />
      </Box>
      <Box sx={{ height: '70vh' }} />
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default LayoutBase;
