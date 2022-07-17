import { Box, Typography } from '@mui/material';
import * as React from 'react';
import Footer from '../../shared/Components/Footer';
import MediaCard from '../../shared/Components/Card';

function Home() {

  return (
    <Box>
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
          />
        </Box>
        <Box>
          <MediaCard />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
