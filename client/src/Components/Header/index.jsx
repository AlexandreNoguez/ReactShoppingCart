import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import logoImg from '../../assets/img/logo.png'

function Header() {
    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box sx={{ width: '5rem' }}>
                <img
                    src={logoImg}
                    alt="a thunder with the store name, storm instruments"
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '3rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                }}
            >
                <Link to="/">
                    <li>Início</li>
                </Link>
                <Link to="/detalhes">
                    <li>Perfil</li>
                </Link>
                <Link to="/carrinho">
                    <li>Carrinho</li>
                </Link>
            </Box>
        </Box>
    )
}

export default Header
