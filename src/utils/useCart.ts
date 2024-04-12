import CartContext from "@/context/CartContext";
import { Item } from "@/reducer/CartReducer";

import { useContext } from "react";

export function useCart() {
  const { cartItems, dispatch, openCart, setOpenCart } =
    useContext(CartContext);

  function handleAddToCart(item: Item) {
    dispatch({ type: "addToCart", payload: { item } });
  }

  function handleIncrementQuantity(id: number) {
    dispatch({ type: "increment", payload: { id } });
  }

  function handleDeleteFromCart(id: number) {
    dispatch({ type: "removeFromCart", payload: { id } });
  }

  function handleDecrementQuantity(id: number) {
    dispatch({
      type: "decrement",
      payload: {
        id,
      },
    });
  }

  function handleOpenCartModal() {
    setOpenCart(!openCart);
  }
  return {
    cartItems,
    openCart,
    handleAddToCart,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleOpenCartModal,
    handleDeleteFromCart,
  };
}
