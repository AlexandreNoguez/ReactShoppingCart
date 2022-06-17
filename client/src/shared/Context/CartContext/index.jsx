import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cart, setCart] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  const handleToAddToCart = (data) => {
    setAddToCart((prev) => {
      const findProductInCart = prev.find((item) => item._id === data._id);

      if (findProductInCart) {
        return prev.map((item) =>
          item._id === data._id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...data, amount: 1 }];
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        filter,
        setFilter,
        cart,
        setCart,
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
