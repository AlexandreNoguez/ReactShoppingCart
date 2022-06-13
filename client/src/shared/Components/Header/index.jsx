import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Icon, styled } from '@mui/material'
import { ShoppingCartIcon } from '@mui/icons-material/ShoppingCart'
import logoImg from '../../assets/img/logo.png'

const LogoStyles = styled(Box)({
    width: '5rem',
    height: '5rem',
    borderRadius: '5rem',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const NavListItem = styled(Box)({
    padding: '1rem',
    backgroundColor: '#e7e7e7',
    color: 'black'
})

function Header() {
    return (
        <Container
            sx={{
                display: 'flex',
                padding: '1rem',
                backgroundColor: '#e7e7e7'
            }}
        >
            <LogoStyles component="img" src={logoImg}></LogoStyles>
            <Box
                sx={{
                    display: 'flex',
                    height: '5rem',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '.5rem',
                    backgroundColor: '#e7e7e7'
                }}
            >
                <Link to="/">
                    <NavListItem>Início</NavListItem>
                </Link>
                <Link to="/perfil">
                    <NavListItem>Perfil</NavListItem>
                </Link>
                <Link to="/carrinho">
                    <NavListItem>Carrinho</NavListItem>
                </Link>
            </Box>
        </Container>
    )
}

export default Header
