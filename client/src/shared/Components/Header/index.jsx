import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, styled } from '@mui/material';
import logoImg from '../../assets/img/logo.png';
import Home from '../../../Pages/Home';

const LogoStyles = styled(Box)({
  width: '5rem',
  height: '5rem',
  borderRadius: '5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const NavListItem = styled(Box)({
  padding: '1rem',
  backgroundColor: '#e7e7e7',
  color: 'black',
});

function Header() {
  return (
    <Container
      sx={{
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
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '.5rem',
          backgroundColor: '#e7e7e7',
        }}
      >
        <Link to="/" element={<Home />}>
          <NavListItem>Início</NavListItem>
        </Link>
        <Link to="/perfil">
          <NavListItem>Perfil</NavListItem>
        </Link>
        <Link to="/carrinho">
          <NavListItem>0</NavListItem>
        </Link>
      </Box>
    </Container>
  );
}

export default Header;
