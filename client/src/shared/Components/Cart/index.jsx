import { useContext } from "react";
import { Box, Drawer, Typography } from "@mui/material";
import { CartContext } from "../../Context/CartContext"

function Cart() {
  const { setHandleToggleCart } = useContext(CartContext)
  return (
    <Drawer
      onClick={() => setHandleToggleCart(true)}
      anchor="right">
      <Box>
        <Typography>
          Carrinho
        </Typography>
      </Box>

    </Drawer>
  );
}

export default Cart;
