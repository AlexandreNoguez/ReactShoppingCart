import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, styled, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import logoImg from '../../assets/img/logo.png';
import Home from '../../../Pages/Home';
import CartContextProvider, { CartContext } from '../../Context/CartContext';
import { LightTheme } from '../../theme';

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

function Header({ setHandleToggleCart }) {
  const { cart } = useContext(CartContext);
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
          onClick={() => setHandleToggleCart(true)}
          variant="contained"
          endIcon={<ShoppingCartIcon />}
        >
          {cart.length > 0 && (
            <Typography color={LightTheme.palette.primary.contrastText}>
              {cart.length}
            </Typography>
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
