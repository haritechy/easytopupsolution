import { Checkbox } from '@/components/FormElements/checkbox';
import Image from 'next/image';
import React from 'react';
import image  from  "../../../public/images/vodafone/voda.png";

const page = () => {
  return (
   
<div className='flex justify-evenly flex-wrap mt-4'>
<div className="w-full max-w-lg bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4 p-4 sm:p-6">
  {/* Mobile Number */}
  <div className="w-full mt-4">
    <label className="block text-base sm:text-lg font-medium text-gray-700 px-1">
      Mobile Number
    </label>
    <input
      type="tel"
      name="mobile"
      id="mobile"
      placeholder="Enter your Mobile Number"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-2"
    />
  </div>

  {/* Repeat checkbox */}
  <div className="flex items-center space-x-2 mt-5">
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
      <span className="ml-2 font-medium text-base sm:text-lg text-gray-700">Repeat</span>
    </label>
  </div>

  {/* Quantity */}
  <div className="w-full mt-5">
    <label className="block text-base sm:text-lg font-medium text-gray-700 px-1">
      Quantity
    </label>
    <input
      type="number"
      placeholder="Enter your Quantity"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-2"
    />
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
    <a
      href="#"
      className="w-full sm:w-auto text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
     >
      Back
    </a>
    <a
      href="#"
      className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
    >
      Next
    </a>
    <a
      href="#"
      className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
    >
      Get Info
    </a>
  </div>
</div>




<div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4  sm:h-60 md:h-80 lg:h-115 object-cover ">
 <div>
  <h1  className="block text-lg font-medium text-gray-700  px-2 text-center bg-{} ">Vodafone/idea Ez 1</h1>
  <Image 
  src={image} 
  alt="jj" 
  className=''
   />
  </div>

</div>
</div>

  );
}

export default page