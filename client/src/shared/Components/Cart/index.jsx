import { Box, Drawer, Typography } from "@mui/material";


function Cart() {
  // const { setHandleToggleCart } = useContext(CartContext)
  return (
    <Drawer anchor="right">
      <Box>
        <Typography>
          Carrinho
        </Typography>
      </Box>

    </Drawer>
  );
}

export default Cart;
