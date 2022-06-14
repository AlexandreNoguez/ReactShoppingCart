import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../shared/Components/Footer';
import Header from '../../shared/Components/Header';
import MediaCard from '../../shared/Components/Card';

function Home() {
  const [handleFilterInstrument, setHandleFilterInstrument] = useState('');
  return (
    <Container maxWidth="md">
      <Header />
      <Box>
        <Typography>Ofertas do dia!</Typography>
        <Box>
          <input
            type="text"
            onChange={(e) => setHandleFilterInstrument(e.target.value)}
          />
        </Box>
        <Box>
          <MediaCard />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default Home;
