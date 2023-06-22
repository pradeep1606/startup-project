"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Carousel = () => {
  const slides = [
    {
      url: '/images/1.jpeg',
    },
    {
      url: '/images/2.jpeg',
    },
    {
      url: '/images/3.jpeg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className='md:h-[500px] h-[350px] w-full m-auto relative group'>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${slides[currentIndex].url})`,
            // opacity: 0.7, // Adjust the opacity value as desired
          }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          {/* Search Bar */}
          <div className='flex w-8/12'>
            <div className='relative flex items-center w-10/12'>
              <input type='text' className='h-full w-full p-4 pl-10 rounded-l-lg' placeholder='Search Your College' />
              <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500'>
                <AiOutlineSearch />
              </div>
            </div>
            <button className='md:w-2/12 w-[20%] bg-blue-700 text-white rounded-r-lg'>Search</button>
          </div>

          <div className='mt-8'>
            <button className='bg-blue-700 text-white px-10 py-[0.4rem] rounded-md'>Admission 2023</button>
          </div>

        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            ></div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Carousel;
