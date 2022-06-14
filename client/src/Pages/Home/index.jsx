import { Box, Container, Typography, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Footer from '../../shared/Components/Footer';
import Header from '../../shared/Components/Header';
import MediaCard from '../../shared/Components/Card';

function Home() {
  const [handleFilterInstrument, setHandleFilterInstrument] = useState('');
  console.log(handleFilterInstrument);
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <Box>
          <Typography textAlign="center" py={2}>
            Ofertas do dia!
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => setHandleFilterInstrument(e.target.value)}
              id="outlined-basic"
              label="Buscar"
              variant="outlined"
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
    </Box>
  );
}

export default Home;
