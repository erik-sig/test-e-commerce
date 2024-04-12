"use client";

import { useState } from "react";
import img1 from "../../../../public/images/image-product-1.jpg";
import img2 from "../../../../public/images/image-product-2.jpg";
import img3 from "../../../../public/images/image-product-3.jpg";
import img4 from "../../../../public/images/image-product-4.jpg";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const SliderSneakers = () => {
  const Imgs = [img1, img2, img3, img4];
  const [state, setState] = useState(0);

  function handlePrevState() {
    if (state === 0) setState(3);
    else setState((prev) => prev - 1);
  }

  function handleNextState() {
    if (state === 3) setState(0);
    else setState((prev) => prev + 1);
  }

  function handleChangeImg(id: number) {
    setState(id);
  }

  return (
    <div className='flex items-center flex-col gap-5'>
      <div className='relative'>
        <div
          onClick={handlePrevState}
          className='hover:opacity-75 duration-100 cursor-pointer flex items-center justify-center z-20 absolute h-10 w-10 bg-white rounded-full left-1 top-1/2 md:hidden'
        >
          <FaArrowLeft size={24} color='black' />
        </div>
        <Image
          className='h w-full md:min-w-96 md:rounded-3xl z-10 '
          width={445}
          quality={100}
          src={Imgs[state]}
          alt='sneaker-women'
        ></Image>
        <div
          onClick={handleNextState}
          className='hover:opacity-75 duration-100 cursor-pointer flex items-center justify-center z-20 absolute h-10 w-10 bg-white rounded-full right-1 top-1/2 md:hidden'
        >
          <FaArrowRight size={24} color='black' />
        </div>
      </div>
      <div className='hidden items-center gap-4 md:gap-2 md:flex'>
        <Image
          aria-selected={state === 0}
          onClick={() => handleChangeImg(0)}
          className='rounded-lg cursor-pointer sele hover:opacity-45 duration-150 border-primary-orange aria-selected:opacity-45 aria-selected:border-primary-orange aria-selected:border-4 '
          src={img1}
          alt='img1'
          width={88}
        ></Image>
        <Image
          aria-selected={state === 1}
          onClick={() => handleChangeImg(1)}
          className='rounded-lg cursor-pointer sele hover:opacity-45 duration-150 border-primary-orange aria-selected:opacity-45 aria-selected:border-primary-orange aria-selected:border-4'
          src={img2}
          alt='img2'
          width={88}
        ></Image>
        <Image
          aria-selected={state === 2}
          onClick={() => handleChangeImg(2)}
          className='rounded-lg cursor-pointer sele hover:opacity-45 duration-150 border-primary-orange  aria-selected:opacity-45 aria-selected:border-primary-orange aria-selected:border-4'
          src={img3}
          alt='img3'
          width={88}
        ></Image>
        <Image
          aria-selected={state === 3}
          onClick={() => handleChangeImg(3)}
          className='rounded-lg cursor-pointer sele hover:opacity-45 duration-150 border-primary-orangearia-selected:opacity-45 aria-selected:border-primary-orange aria-selected:border-4'
          src={img4}
          alt='img4'
          width={88}
        ></Image>
      </div>
    </div>
  );
};
