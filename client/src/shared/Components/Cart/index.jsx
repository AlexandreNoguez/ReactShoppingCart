import React from 'react';
import { Box, Typography } from '@mui/material';

function Cart() {
  return (
    <Box position="fixed" bgcolor="black" sx={{ inset: 0, opacity: 0.7 }}>
      <Box bgcolor="white" width="250px" top={0} right={0} height="screen">
        <Typography>Carrinho</Typography>
      </Box>
    </Box>
  );
}

export default Cart;
