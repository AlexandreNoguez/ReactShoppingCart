import React from 'react';
import { Box, Typography } from '@mui/material';
import { LightTheme } from '../../theme';

function Cart({ setHandleToggleCart }) {
  return (
    <Box>
      <Box
        onClick={() => setHandleToggleCart(false)}
        position="fixed"
        bgcolor="black"
        sx={{ inset: 0, opacity: 0.7 }}
      />
      <Box
        sx={{
          bgcolor: 'white',
          width: '250px',
          height: '100vh',
          opacity: 1,
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Typography
          textAlign="center"
          p={1}
          bgcolor={LightTheme.palette.background.paper}
          color={LightTheme.palette.primary}
        >
          Carrinho
        </Typography>
      </Box>
    </Box>
  );
}

export default Cart;
