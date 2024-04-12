"use client";

import { CartActions, CartItems, CartReducer } from "@/reducer/CartReducer";
import { ReactNode, useReducer, useState } from "react";
import { createContext } from "react";

interface CartContextType {
  cartItems: CartItems;
  openCart: boolean;
  dispatch: React.Dispatch<CartActions>;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext({} as CartContextType);
CartContext.displayName = "Cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartItems, dispatch] = useReducer(CartReducer, { item: [] });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        dispatch,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
