import React from "react";
import { FaStar } from "react-icons/fa";
import CardTestimonial from "./card/CardTestimonial";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials */}
      <section id='testimonials' className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              What Our Readers Say
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Don't just take our word for it
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <CardTestimonial
              comment={
                "The best selection of books I've found online. Fast shipping and great customer service!"
              }
              image={"/images/testimonial-1.webp"}
              name={"Sarah Johnson"}
              desc={"Book Club Member"}
            />
            <CardTestimonial
              comment={
                "I love the curated collections. Always find something interesting to read."
              }
              image={"/images/testimonial-2.webp"}
              name={"Michael Chen"}
              desc={"Avid Reader"}
            />
            <CardTestimonial
              comment={
                "Great prices and frequent sales. My go-to place for new releases."
              }
              image={"/images/testimonial-3.webp"}
              name={"Emily Rodriguez"}
              desc={"Loyal Customer"}
              star={4}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
