/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Container } from '@mui/material';
import { useForm } from 'react-hook-form'
import Footer from '../../shared/Components/Footer';
import { createNewProduct } from '../../shared/services/api';

function AdminAddProducts() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await createNewProduct(data)
    }
    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ height: '70vh' }}>Perfil
                    <Box
                        onSubmit={handleSubmit(onSubmit)}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <label htmlFor="title">Titulo *
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Ex.: Piano"
                                // variant="standard"
                                {...register("title")}
                            />
                        </label>
                        <label htmlFor="description">Descrição *
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Ex.: Instrumento novo"
                                // variant="standard"
                                {...register("description")}
                            />
                        </label>
                        <label htmlFor="value">Preço *
                            <input
                                type="number"
                                name="value"
                                id="value"
                                placeholder="Ex.: 25000"
                                // variant="standard"
                                {...register("value")}
                            />
                        </label>
                        <label htmlFor="image">Imagem *
                            <input
                                type="text"
                                name="image"
                                id="image"
                                placeholder="Ex.: http://www..."
                                // variant="standard"
                                {...register("image")}
                            />
                        </label>
                        <button type='submit'>Registrar</button>
                    </Box>
                </Box>
            </Container >
            <Footer />
        </Box >
    );
}

export default AdminAddProducts;
