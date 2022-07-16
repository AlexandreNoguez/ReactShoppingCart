/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useApi } from '../../../Hooks/useApi';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const { data } = useApi('catalog');
  const [filter, setFilter] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  const handleToAddToCart = (product) => {
    setAddToCart((prev) => {
      const findProductInCart = prev.find((item) => item._id === product._id);
      // console.log('findProductInCart', findProductInCart);

      if (findProductInCart) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      // console.log('data', data)
      return [...prev, { ...product, amount: 1 }];
    });
  };

  return (
    <CartContext.Provider
      value={{
        data,
        filter,
        setFilter,
        addToCart,
        setAddToCart,
        handleToAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
