"use client";
import React, { useState, useEffect } from 'react';

const Dinosaur = () => {

  const [isJumping, setJumping] = useState(false);
  const keyDown = (e:any) => {
    const dinoElement = document.getElementsByClassName('dinosaur-image')[0];
    if(e.code === 'Space' || e.key === " "){
      e.preventDefault();
      setJumping(true);
      console.log("yes")
      return true; 
    }
  }

  const keyUpEvent = (e:any) => {
    if (e.code === 'Space'){
      setJumping(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUpEvent )
  });
  return (
    <div className='h-full w-full'>
    <div className={`ml-36 mt-36 bg-gray-100 dinosaur-image ${isJumping? 'jump': ''}`}>
    </div>
    <div className='dino-ground ml-36 mt-44'>
    </div>
    <div className='flex flex-col mt-56 ml-36'>
      <p className='text-2xl font-bold'>No Internet</p>
      <p className='mt-4'>Try: </p>
        <ul className='list-disc ml-10'>
          <li>Checking the network cables, modem and router</li>
          <li>Reconnecting to Wi-Fi</li>
        </ul>
    </div>
    </div>
  );
};

export default Dinosaur;
