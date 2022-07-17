import { Box, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../Hooks/useApi';

function ProductDetails() {
    const { data } = useApi('catalog')
    const title = useParams()
    return (
        <Box sx={{ flexGrow: 1 }}>
            {data?.filter((product) => product.title === title).map((item) => (

                <Grid key={item._id}>
                    <Grid item xs={2}>
                        <Box>Avaliação</Box>
                        <Box>{item.title}</Box>
                        <a href='#descrição'>{item.description}</a>
                    </Grid>
                    <Grid item xs={2}>
                        {/* <Box> teste */}
                        <img src={data.image} alt="" />
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            teste
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Box>
    )

}

export default ProductDetails;