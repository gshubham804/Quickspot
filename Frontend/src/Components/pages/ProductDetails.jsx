import Carousel from "../Carousel";
import {
  Coffee,
  FirstAid,
  MapPinLine,
  Storefront,
  Train,
  TreeEvergreen,
  Truck,
} from "phosphor-react";
import { carImagesForProductDetails } from "../data/images";

const nearestOptions = [
  { icon: <FirstAid />, label: "Hospital" },
  { icon: <Train />, label: "Metro Station" },
  { icon: <Truck />, label: "Bus Stand" },
  { icon: <Storefront />, label: "Grocery Store" },
  { icon: <Coffee />, label: "Coffee Shop" },
  { icon: <TreeEvergreen />, label: "Park" },
];

const ProductDetails = () => {
  return (
    <>
      <Carousel images={carImagesForProductDetails} />
      <div className="mt-8 px-12 bg-white dark:bg-gray-800 rounded-lg">
        <div className="mt-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold leading-tight">
            About Zone A Parking Zone
          </h1>
          <button className="text-white bg-red-500 px-8 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mb-2 md:mb-0 md:mr-2">
            Book
          </button>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ms-3">
              5.0
            </span>
          </div>
        </div>
        <p className="text-justify max-w-4xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum autem
          odio dolorum corporis ducimus! Expedita, eos sint dolor iste dolores
          reiciendis ab quasi necessitatibus perspiciatis cum amet quisquam
          explicabo tenetur voluptatum quos voluptate.
        </p>
        <h1 className="mt-8 mb-4 text-3xl font-semibold leading-tight">
          Owner
        </h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-6 md:mb-0 lg:mb-0">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256"
                alt=""
              />
              <div className="font-medium dark:text-white">
                <p className="text-lg">Jese Leos</p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPinLine color="#EF4444" size={32} weight="fill" />
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Location</p>
              <p className="text-gray-600 max-w-md">
                D-226, Block-D, Mukherjee Nagar, New Delhi, 110096
              </p>
            </div>
          </div>
        </div>
        <h1 className="mt-12 mb-4 text-xl font-semibold leading-tight">
          Nearest
        </h1>
        <div className="flex flex-wrap gap-4 mt-4 mb-16">
          {nearestOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <div
                className="px-4 flex items-center justify-center w-full h-10 
              rounded-md bg-red-200"
              >
                {option?.icon}
                <span className="ml-2">{option.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
