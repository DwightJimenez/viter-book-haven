import React from "react";
import { FaStar } from "react-icons/fa";

const CardTestimonial = ({ star, comment, image, name, desc }) => {
  return (
    <>
      <div className='bg-gray-50 p-6 rounded-lg'>
        <div className='flex items-center mb-4'>
          <div className='flex items-center mr-4'>
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            {star === 4 ? (
              <FaStar className='text-gray-300' />
            ) : (
              <FaStar className='text-yellow-400' />
            )}
          </div>
        </div>
        <p className='text-gray-700 mb-4'>"{comment}"</p>
        <div className='flex items-center'>
          <img src={image} alt={name} className='w-10 h-10 rounded-full mr-3' />
          <div>
            <h4 className='font-bold text-gray-900'>{name}</h4>
            <p className='text-sm text-gray-600'>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTestimonial;
