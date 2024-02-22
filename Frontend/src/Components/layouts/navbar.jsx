import { List } from "phosphor-react";
import { useState } from "react";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <>
      {/*  mobile view */}
      <div className="sm:flex xs:flex justify-between items-center p-4 cursor-pointer md:hidden">
        <div className="cursor-pointer text-2xl font-bold">
          <span className="text-white bg-red-500 px-2 py-1 rounded-md">Q</span>
          <span className="text-gray-800">uickSpot</span>
        </div>
        <List size={32} onClick={toggleOptions} />
        {showOptions && (
          <div className="w-2/5 text-center absolute right-0 top-12 bg-white shadow-md p-4 z-10">
            {/* List options for mobile */}
            <ul className="font-medium">
              <li className="cursor-pointer hover:text-red-500 hover:underline mb-2">
                Home
              </li>
              <li className="cursor-pointer hover:text-red-500 hover:underline mb-2">
                Services
              </li>
              <li className="cursor-pointer hover:text-red-500 hover:underline mb-2">
                About us
              </li>
              <li className="cursor-pointer hover:text-red-500 hover:underline">
                Contact us
              </li>
            </ul>

            {/* Buttons for mobile */}
            <div className="flex flex-col mt-4">
              <button className="text-red-500 bg-white px-4 py-2 rounded-md border-2 border-red-400 hover:bg-red-100 focus:outline-none focus:ring focus:border-red-300 mb-2">
                Login
              </button>
              <button className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
      {/*  desktop view */}
      <div className="sm:hidden xs:hidden shadow-md px-4 md:px-8 py-2 md:py-4 md:flex flex-col md:flex-row justify-between items-center">
        <div className="cursor-pointer text-3xl font-bold mb-4 md:mb-0">
          <span className="text-white bg-red-500 px-2 py-0.5 rounded-md">
            Q
          </span>
          <span className="text-gray-800">uickSpot</span>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <ul className="font-medium flex flex-col md:flex-row md:mr-8">
            <li className="cursor-pointer hover:text-red-500 hover:underline hover:underline-offset-4 mb-2 md:mb-0 md:mr-8">
              Home
            </li>
            <li className="cursor-pointer hover:text-red-500 hover:underline hover:underline-offset-4 mb-2 md:mb-0 md:mr-8">
              Services
            </li>
            <li className="cursor-pointer hover:text-red-500 hover:underline hover:underline-offset-4 mb-2 md:mb-0 md:mr-8">
              About us
            </li>
            <li className="cursor-pointer hover:text-red-500 hover:underline hover:underline-offset-4 mb-2 md:mb-0">
              Contact us
            </li>
          </ul>
          <div className="flex flex-row mt-4 md:mt-0">
            <button className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mb-2 md:mb-0 md:mr-2">
              Login
            </button>
            <button className="text-red-500 bg-white px-4 py-2 rounded-md border-2 border-red-400 hover:bg-red-100 focus:outline-none focus:ring focus:border-red-300">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
