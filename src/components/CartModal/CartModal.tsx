"use client";

import Image from "next/image";

import img from "../../../public/images/image-product-1-thumbnail.jpg";
import { BiTrash } from "react-icons/bi";

import { Item } from "@/reducer/CartReducer";
import { useCart } from "@/utils/useCart";
import { Container } from "postcss";

export const CartModal = ({ item }: { item: Item }) => {
  const { handleDeleteFromCart } = useCart();

  function handleDeleteItem() {
    handleDeleteFromCart(item.id);
  }

  return (
    <div className='absolute z-50 min-w-72 -left-44  shadow-2xl -bottom-52 bg-white flex flex-col rounded-lg md:min-w-80 '>
      <div className='p-4 border-b-2'>
        <span className='font-bold'>Cart</span>
      </div>
      <div className='p-4 flex items-center justify-start gap-4'>
        <Image
          className=' rounded'
          src={img}
          alt='shoes img cart'
          width={50}
        ></Image>
        <div className='flex flex-col flex-1'>
          <h3 className='text-sm'>{item.name}</h3>
          <span className='text-sm flex gap-2'>
            <span>${item.price}</span> <span>x</span>
            <span>{item.quantity}</span>
            <span className='font-bold'>
              ${(item.quantity * 125).toFixed(2)}
            </span>
          </span>
        </div>
        <BiTrash
          size={24}
          color='#68707D'
          onClick={handleDeleteItem}
          className='cursor-pointer hover:opacity-75 duration-150'
        ></BiTrash>
      </div>
      <div className='px-4 pb-4'>
        <button className=' bg-primary-orange font-bold p-2 w-full rounded-lg text-white'>
          Checkout
        </button>
      </div>
    </div>
  );
};
