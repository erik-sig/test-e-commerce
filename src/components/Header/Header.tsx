"use client";

import Image from "next/image";
import { BsCart } from "react-icons/bs";

import avatar from "../../../public/images/image-avatar.png";

import { CartModal } from "../CartModal/CartModal";
import { useCart } from "@/utils/useCart";

export const Header = () => {
  const { cartItems, openCart, handleOpenCartModal } = useCart();

  return (
    <header className='relative w-full h-24 px-5 md:mb-20'>
      <div className='h-full max-w-screen-xl m-auto flex items-center justify-between border-b-2 rounded'>
        <h1 className='font-bold text-3xl text-neutral-black-opacity'>
          sneakers
        </h1>
        <nav className='gap-5 flex-1 ml-16 text-neutral-grayish-blue h-full hidden md:flex'>
          <h3 className='cursor-pointer flex items-center h-full hover:text-neutral-black-opacity hover:border-primary-orange hover:border-b-4 duration-100'>
            Collections
          </h3>
          <h3 className='cursor-pointer flex items-center h-full hover:text-neutral-black-opacity hover:border-primary-orange hover:border-b-4 duration-100'>
            Men
          </h3>
          <h3 className='cursor-pointer flex items-center h-full hover:text-neutral-black-opacity hover:border-primary-orange hover:border-b-4 duration-100'>
            Women
          </h3>
          <h3 className='cursor-pointer flex items-center h-full hover:text-neutral-black-opacity hover:border-primary-orange hover:border-b-4 duration-100'>
            About
          </h3>
          <h3 className='cursor-pointer flex items-center h-full hover:text-neutral-black-opacity hover:border-primary-orange hover:border-b-4 duration-100'>
            Contact
          </h3>
        </nav>
        <div className='flex gap-5 items-center md:gap-12 relative'>
          <BsCart
            aria-disabled={cartItems.item.length === 0}
            size={24}
            color='#68707D'
            onClick={handleOpenCartModal}
            className='cursor-pointer hover:opacity-75 duration-150 aria-disabled:opacity-45 aria-disabled:cursor-auto'
          ></BsCart>
          {openCart &&
            cartItems?.item.map((item) => (
              <CartModal key={item.id} item={item} />
            ))}
          <div className='absolute w-5 h-5 bg-primary-orange text-white flex items-center justify-center rounded-full top-3 left-3'>
            {cartItems.item.length !== 0 ? cartItems.item.length : 0}
          </div>

          <div>
            <Image
              className='border-primary-orange border-2 rounded-full w-16 h-16'
              src={avatar}
              alt='Perfil image'
              quality={100}
              priority
            ></Image>
          </div>
        </div>
      </div>
    </header>
  );
};
