/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  // const [filter, setFilter] = useState([]);
  const [cart, setCart] = useState([]);
  const [handleFilterInstrument, setHandleFilterInstrument] = useState('');
  const [handleToggleCart, setHandleToggleCart] = useState(false)
  // console.log(handleFilterInstrument);

  const handleToAddToCart = (_id) => {
    const newCart = [...cart];

    const newProduct = newCart.find((product) => product.id === _id);

    if (!newProduct) {
      newCart.push({ _id, amount: 1 })
    } else {
      newProduct.amount = newProduct + 1;
    }

    setCart(newCart)

    console.log(newCart)
  };

  const handleRemoveFromCart = (_id) => {

    const newCart = [...cart];

    const newProduct = newCart.find((product) => product._id === _id);

    if (newProduct && newProduct.amount > 1) {
      newProduct.amount -= 1
      setCart(newCart)
    } else {
      const arrayFiltered = newCart.filter(product => product._id !== _id);
      setCart(arrayFiltered)
    }

  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        // filter,
        // setFilter,
        cart,
        setCart,
        handleFilterInstrument,
        setHandleFilterInstrument,
        handleToggleCart,
        setHandleToggleCart,
        handleToAddToCart,
        handleRemoveFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
