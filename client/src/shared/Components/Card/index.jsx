import { Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { LightTheme } from '../../theme';
import { useApi } from '../../../Hooks/useApi';

export default function MediaCard() {
  const { handleToAddToCart } = useContext(CartContext);
  const { data, error } = useApi('catalog')

  // console.log(data?.filter((product) => product.title === title).map((item) => item.title))
  console.log("data._id", data.title, error)

  const RealBrl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
      {data?.map((item) => (

        <Card
          key={item._id}
          sx={{
            maxWidth: 250,
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color={LightTheme.palette.primary.light}
            >
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {RealBrl.format(item.value)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => handleToAddToCart(data._id)}
              variant="contained"
              startIcon={<AddCircleIcon />}
              size="small"
            >

              Carrinho
            </Button>
            <Button variant="outlined" size="small">
              <Link to={`/catalog/${item.title}`}>
                Detalhes
              </Link>
            </Button>
          </CardActions>
        </Card>
      ))
      }
    </Box >
  );
}
