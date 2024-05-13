import {  useContext } from 'react';
import CartContext from './CartContext';

export const useCartActions = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};