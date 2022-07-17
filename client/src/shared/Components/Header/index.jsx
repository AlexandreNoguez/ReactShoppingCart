import * as React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import logoImg from '../../assets/img/logo.png';
import Home from '../../../Pages/Home';
import { CartContext } from '../../Context/CartContext';
import { LightTheme } from '../../theme';
import Cart from '../Cart';
import SearchInput from '../SearchInput';

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
  const { cart, setHandleToggleCart } = useContext(CartContext);
  return (
    <Box
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
          width: '90%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '.5rem',
          backgroundColor: '#e7e7e7',
          textDecoration: 'none',
        }}
      >
        <Box display="flex" justifySelf="flex-end">
          <SearchInput />
        </Box>
        <Box display="flex" >
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
            <Cart>
              {cart.length > 0 && (
                <Typography color={LightTheme.palette.primary.contrastText}>
                  {cart.length}
                </Typography>
              )}
            </Cart>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
