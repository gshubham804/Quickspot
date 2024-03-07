import { useState } from "react";
import { filteredData } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable no-constant-condition */
const Search = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    pincode: "",
  });
  const dispatch = useDispatch();

  const handleFormInput = (field, value) => {
    setFormValues((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    // Check if at least one property has a value
    const hasValue = Object.values(formValues).some(
      (value) => typeof value === "string" && value.trim() !== ""
    );

    if (!hasValue) {
      console.error("At least one property should contain a value");
      return false;
    }

    // Validate pincode and companyName
    if (formValues.pincode) {
      // Validate pincode as a number
      const pincodeValue = parseFloat(formValues.pincode);
      if (isNaN(pincodeValue) || !Number.isInteger(pincodeValue)) {
        console.error("Pincode should be a valid number");
        return false;
      }
    }

    if (formValues.companyName) {
      // Validate companyName as a string
      const companyNameRegex = /^[A-Za-z]+$/;
      if (!companyNameRegex.test(formValues.companyName)) {
        console.error("Company Name should be a valid string");
        return false;
      }
    }

    // Continue with form submission or other logic
    console.log("Form is valid");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) dispatch(filteredData(formValues));
  };

  const data = useSelector((state) => state.productData?.filteredData);

  return (
    <>
      <form className="max-w-3xl mx-auto p-4 md:p-0" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="flex flex-col md:flex-row items-center relative border-[1px] border-red-400 rounded-md p-1">
          <div className="absolute inset-y-0 start-0 bottom-28 md:bottom-0 lg:bottom-0 md:end-1/2 lg:end-1/2 flex items-center p-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-red-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search-companyName"
            className="block w-full p-4 m-1 ps-10 text-base text-gray-900 rounded-lg bg-gray-200"
            placeholder="Search with parking zone name"
            value={formValues.companyName}
            onChange={(e) => handleFormInput("companyName", e.target.value)}
          />
          <div
            className="absolute inset-y-0 
           top-5 md:top-0 lg:top-0 end-[90%] md:end-1/2 lg:end-1/2 flex
            items-center p-3 pointer-events-none"
          >
            <svg
              className="w-4 h-4 text-red-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search-pincode"
            className="block w-full p-4 m-1 ps-10 text-base text-gray-900 rounded-lg bg-gray-200"
            placeholder="Search with pincode"
            value={formValues.pincode}
            onChange={(e) => handleFormInput("pincode", e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-2 md:mt-0"
          >
            Search
          </button>
        </div>
      </form>

      {data.length > 0 && (
        <div
          className={`max-w-3xl lg:mx-auto md:mx-auto mx-2 p-4 bg-gray-300
        ${data.length > 0 ? "rounded-b-md" : "rounded-md"} shadow-md`}
        >
          {data.map((ele, idx) => (
            <div key={idx} className="mb-4 border-b-[1px] border-white pb-0">
              <p className="text-base font-medium text-gray-800">
                {ele?.companyName}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
