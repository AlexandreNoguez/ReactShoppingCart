import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from 'react';
import logoImg from '../../assets/img/logo.png';
import Home from '../../../Pages/Home';

const LogoStyles = styled(Box)({
  width: '5rem',
  height: '5rem',
  borderRadius: '5rem',
  alignSelf: 'center',
  justifyContent: 'space-between',
});

const NavListItem = styled(Box)({
  padding: '.5rem',
  backgroundColor: '#e7e7e7',
  color: 'black',
});

function Header() {
  const [handleToggleCart, setHandleToggleCart] = useState(true);
  return (
    <Box
      width="99%"
      sx={{
        margin: '-10px',
        display: 'flex',
        padding: '1rem',
        backgroundColor: '#e7e7e7',
      }}
    >
      <LogoStyles component="img" src={logoImg} />
      <Box
        sx={{
          display: 'flex',
          height: '5rem',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '.5rem',
          backgroundColor: '#e7e7e7',
          textDecoration: 'none',
        }}
      >
        <Link to="/" element={<Home />}>
          <NavListItem>Início</NavListItem>
        </Link>
        <Link to="/perfil">
          <NavListItem>Perfil</NavListItem>
        </Link>
        <Button
          onClick={setHandleToggleCart}
          variant="contained"
          endIcon={<ShoppingCartIcon />}
        >
          Carrinho
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
