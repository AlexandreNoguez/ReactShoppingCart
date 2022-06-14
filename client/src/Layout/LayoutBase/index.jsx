import { Box, Container } from '@mui/material';
import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function LayoutBase() {
  return (
    <Container maxWidth="md">
      <Box>
        <Header />
      </Box>
      <Box>Layout Base</Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default LayoutBase;
