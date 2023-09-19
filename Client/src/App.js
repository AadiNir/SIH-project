import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AgroTrucker from './AgroTrucker.jfif';
import AgroTrucker2 from './AgroTrucker2.jfif';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function App() {
  const slides = [AgroTrucker, AgroTrucker2];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div>
      <Navbar />
      <div className='relative'>
        <div style={{  position: 'relative' ,top: '5px', left: '10px' }}>
          <h1 className='absolute text-white text-4xl'>
            Welcome<br />to <b>AgroChain!</b>
          </h1>
          </div>
          <div style={{  position: 'relative' ,top: '90px', left: '10px' }}>
          <h2 className='absolute text-white text-1xl'>
            Smart Fruit Health Monitoring<br/>and Tracking System
          </h2>
          </div>
          
        

          <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} />
          </div>
          <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} />
          </div>
        <img
          className='w-screen h-screen object-cover top-16'
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
    </div>
  );
}

export default App;
