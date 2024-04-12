"use client";

import { BsCart } from "react-icons/bs";
import { SliderSneakers } from "./componentsHome/SliderImgs/SliderSneakers";
import { QuantityInput } from "./componentsHome/QuantityInput/QuantityInput";
import { useCart } from "@/utils/useCart";

import img1 from "../../../../public/images/image-product-1-thumbnail.jpg";
import { useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";

export default function Home() {
  const { handleAddToCart, cartItems } = useCart();

  useEffect(() => {
    if (cartItems.item.length === 0) setAdded(false);
  }, [cartItems.item]);

  const [added, setAdded] = useState(false);
  function handleAddItem() {
    const Item = {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125,
      img: "../../../../public/images/image-product-1-thumbnail.jpg",
      quantity: 1,
    };
    handleAddToCart(Item);
    setAdded(true);
  }
  return (
    <main className='flex flex-col gap-10 md:flex-row md:p-4 md:mb-20'>
      <SliderSneakers />
      <div className='flex flex-col items-start justify-center gap-10 p-4'>
        <h3 className='text-primary-orange text-sm font-bold'>
          SNEAKER COMPANY
        </h3>
        <h1 className='text-4xl font-bold'>Fall Limited Edition Sneakers</h1>
        <p className='text-neutral-grayish-blue'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span className='text-3xl font-bold'>$125.00</span>
        <div className='flex-col flex gap-4 items-center w-full md:flex-row'>
          <QuantityInput />
          <button className='h-14 cursor-pointer hover:opacity-75 duration-150 w-full rounded-2xl shadow-primary-orange drop-shadow-lg bg-primary-orange p-3 gap-1 flex items-center justify-center '>
            {added ? (
              <>
                <BiCheck size={24} color='white'></BiCheck>

                <span className=' text-white font-bold' onClick={handleAddItem}>
                  Added to cart
                </span>
              </>
            ) : (
              <>
                <BsCart size={24} color='white'></BsCart>

                <span className=' text-white font-bold' onClick={handleAddItem}>
                  Add to cart
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
