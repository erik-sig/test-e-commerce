"use client";

import { useCart } from "@/utils/useCart";

export const QuantityInput = () => {
  const { cartItems, handleDecrementQuantity, handleIncrementQuantity } =
    useCart();

  return (
    <div className='w-full md:w-auto gap-5 p-3 rounded-lg flex items-baseline justify-between md:justify-center bg-neutral-light-grayish-blue'>
      <span
        className='text-primary-orange font-bold text-2xl hover:opacity-75 duration-150 cursor-pointer'
        onClick={() => handleDecrementQuantity(1)}
      >
        -
      </span>
      <span className='font-bold w-5 text-center'>
        {cartItems.item.length === 0 ? 0 : cartItems.item[0].quantity}
      </span>
      <span
        className='text-primary-orange font-bold text-2xl hover:opacity-75 duration-150 cursor-pointer'
        onClick={() => handleIncrementQuantity(1)}
      >
        +
      </span>
    </div>
  );
};
