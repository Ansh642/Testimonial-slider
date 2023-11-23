import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';

export default function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setindex] = useState(0);

  function leftHandler() {
    if(index-1<0)
    {
      setindex(reviews.length-1);
    }

    else{
      setindex(index-1);
    }
  }

  function rightHandler() {
    if(index+1>=reviews.length)
    {
      setindex(0);
    }
    else{
      setindex(index+1);
    }
  }

  function surpriseHandler() {
    let random=Math.floor(Math.random()*reviews.length);
    setindex(random);
  }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center
     items-center mt-10 p-10 transition-all duration-500 hover:shadow-lg cursor-pointer rounded-sm'>
      <Card review={reviews[index]} />

      <div className='flex flex-row mt-5 gap-3 text-3xl text-violet-400 font-bold mx-auto justify-center'>
        <button onClick={leftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft />
        </button>
        <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 text-white px-10 py-2 transition-all duration-200
             text-lg rounded-md mt-5'>Surprise ME</button>
      </div>

    </div>
  );
}






