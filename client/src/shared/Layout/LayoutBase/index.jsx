import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { LightTheme } from '../../theme'

function LayoutBase() {
    return (
        <Container maxWidth="md">
            <Box>
                <Header />
            </Box>
            <Box sx={{ height: '70vh' }}>
                <Typography color={LightTheme.palette.primary.dark}>
                    Conteudo teste
                </Typography>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default LayoutBase
