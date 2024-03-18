import { Link } from "react-router-dom";
import { getProductData } from "./redux/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const cardData = useSelector((state) => state.productData.cardData);

  return (
    <>
      {cardData.length > 0 &&
        cardData.map((data) => {
          return (
            <>
              <div
                key={data?._id}
                className="mx-2 md:mx-4 lg:mx-2 mb-6 w-full max-w-xs
               bg-white border border-red-500 rounded-lg shadow-md
               dark:bg-gray-800 dark:border-gray-700"
              >
                <Link to={`/productdetails/${data._id}`}>
                  <img
                    className="w-full h-44 md:h-64 object-cover rounded-t-lg"
                    src={data?.images[0]}
                    alt="product image"
                  />
                </Link>
                <div className="p-4 md:p-5">
                  <Link to={`/productdetails/${data._id}`}>
                    <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {data?.companyName}
                    </h5>
                  </Link>
                  <div className="flex items-center mt-2.5 mb-3 md:mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(parseInt(data?.ratings))].map((_, index) => (
                        <svg
                          key={index}
                          className="w-3 h-3 md:w-4 md:h-4 text-red-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs md:text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ms-2 md:ms-3">
                      {data?.ratings}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                      ₹{data?.price}
                    </span>
                    <Link
                      to={`/productdetails/${data._id}`}
                      className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 text-center mt-2 md:mt-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default ProductCard;
