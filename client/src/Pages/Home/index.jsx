import { Box, Container, Typography, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Footer from '../../shared/Components/Footer';
import MediaCard from '../../shared/Components/Card';
import { LightTheme } from '../../shared/theme';

function Home() {
  const [handleFilterInstrument, setHandleFilterInstrument] = useState('');
  console.log(handleFilterInstrument);
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: LightTheme.palette.background.paper }}
      >
        <Box>
          <Typography component="h3" variant="h3" textAlign="center" py={1}>
            Ofertas do dia!
          </Typography>
          <Box display="flex" width="100%" justifyContent="center">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch', margin: '1rem' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ alignItems: 'center', justifyContent: 'center' }}
                onChange={(e) => setHandleFilterInstrument(e.target.value)}
                id="outlined-basic"
                label="Buscar"
                variant="outlined"
              />
            </Box>
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
