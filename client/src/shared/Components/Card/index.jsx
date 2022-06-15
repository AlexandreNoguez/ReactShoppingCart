import { Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { LightTheme } from '../../theme';

import { useApi } from '../../../Hooks/useApi';

export default function MediaCard() {
  const { data } = useApi('catalog');
  const RealBrl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  //   const click = () => {
  //     console.log(data);
  //   };
  return (
    <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
      {data.map((item) => (
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
            <Typography variant="body2" color={LightTheme.palette.primary.dark}>
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {RealBrl.format(item.value)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ position: 'static' }}
              variant="contained"
              startIcon={<AddCircleIcon />}
              size="small"
            >
              Carrinho
            </Button>
            <Button
              sx={{ position: 'inherit' }}
              variant="outlined"
              size="small"
            >
              Detalhes
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
