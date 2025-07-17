import React from "react";
import { FaStar } from "react-icons/fa";
import CardBook from "./card/CardBook";

const Featured = () => {
  return (
    <>
      {/* Featured Books */}
      <section id='featured' className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              Featured Books
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Our handpicked selection of must-read titles
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Book 1 */}
            <CardBook
              image={"/images/feature-1.webp"}
              title={"The Silent Patient"}
              author={"Alex Michaelides"}
              rate={"4.2"}
              price={"12.99"}
            />

            {/* Book 2 */}
            <CardBook
              image={"/images/feature-2.webp"}
              title={"Atomic Habits"}
              author={"James Clear"}
              rate={"4.9"}
              price={"14.99"}
              star={5}
            />

            {/* Book 3 */}
            <CardBook
              image={"/images/feature-3.webp"}
              title={"Educated"}
              author={"Tara Westover"}
              rate={"4.8"}
              price={"13.49"}
              star={5}
            />

            {/* Book 4 */}
            <CardBook
              image={"/images/feature-4.webp"}
              title={"Where the Crawdads Sing"}
              author={"Delia Owens"}
              rate={"4.5"}
              price={"11.99"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
