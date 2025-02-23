import React from 'react';
import Image from 'next/image';
const MenuItem = ({ imageSrc, title, price, rating, description, discount }) => {
  return (
    <div className="w-full max-w-lg bg-white rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out p-6 mr-5 ">
      {/* Image Section */}
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-72 object-cover rounded-lg transition-transform transform hover:scale-95 duration-300 ease-in-out hover:shadow-lg" />
        <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-sm font-semibold rounded-md">
          {discount}% Off
        </div>
        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
          ❤️
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-red-500 text-2xl font-bold">${price}</span>
          <span className="text-gray-600 flex items-center">
            ⭐ <span className="ml-1 text-lg">{rating} (2.5K)</span>
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
        <div className="text-md text-gray-600 mt-2">
          <span>✔ 4 Piece Chicken</span><br />
          <span>✔ Spicy Sauce</span>
        </div>

        <button className="border border-pink-300 mt-6 w-full flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out shadow-md">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function Demo() {
  return (
    <div className="p-6 relative">
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-[url('/food-bg.webp')] bg-cover bg-center opacity-80"
  ></div>
  
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-70"></div>

  {/* Centered Grid Layout */}
  <div className="relative max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
    <MenuItem imageSrc="/img/foods/featured-1.png" title="Baked Chicken Wings and Legs" price={30.00} rating="4.7" description="2.5K" discount="20" />
    <MenuItem imageSrc="/img/foods/traditional-2.png" title="BBQ Pulled Pork Sandwich" price={20.00} rating="4.7" description="2.5K" discount="20" />
    <MenuItem imageSrc="/img/foods/traditional-3.png" title="Pork Chop with Apple Chutney" price={18.00} rating="4.7" description="2.5K" discount="20" />
    <MenuItem imageSrc="/img/foods/traditional-4.png" title="Baked Chicken Wings and Legs" price={30.00} rating="4.7" description="2.5K" discount="20" />
    <MenuItem imageSrc="/img/foods/traditional-5.png" title="BBQ Pulled Pork Sandwich" price={20.00} rating="4.7" description="2.5K" discount="20" />
    <MenuItem imageSrc="/img/foods/traditional-6.png" title="Pork Chop with Apple Chutney" price={18.00} rating="4.7" description="2.5K" discount="20" />
  </div>
</div>

  );
}
