import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Typography
                color="primary"
                sx={{
                    height: '5rem',
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                Made by Alexandre Noguez
            </Typography>
        </Box>
    )
}

export default Footer
