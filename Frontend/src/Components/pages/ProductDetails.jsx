import Carousel from "../Carousel";
import { MapPinLine } from "phosphor-react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsData } from "../redux/productSlice";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetailsData(params?.id));
  }, []);

  const productData = useSelector(
    (state) => state.productData.productDetailsData
  );

  return (
    <ProtectedRoute>
      {productData !== null && (
        <>
          <Carousel images={productData?.images} />
          <div className="mt-8 px-12 bg-white dark:bg-gray-800 rounded-lg">
            <div className="mt-6 flex justify-between items-center">
              <h1 className="text-3xl font-semibold leading-tight">
                About {productData?.companyName}
              </h1>
              <button
                className="text-white bg-red-500 px-8 py-2 rounded-md
             hover:bg-red-600 focus:outline-none focus:ring
              focus:border-red-300 mb-2 md:mb-0 md:mr-2"
                onClick={() =>
                  navigate("booking")
                }
              >
                Book
              </button>
            </div>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({
                  length: parseInt(productData?.ratings) || 0,
                }).map((_, index) => (
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
                  {productData?.ratings}
                </span>
              </div>
            </div>
            <p className="text-justify max-w-4xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {productData?.companyDescription}
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
                    <p className="text-lg">{productData?.ownerFullName}</p>
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
                    {productData?.location}, {productData?.city}
                  </p>
                </div>
              </div>
            </div>
            <h1 className="mt-12 mb-4 text-xl font-semibold leading-tight">
              Nearest
            </h1>
            <div className="flex flex-wrap gap-4 mt-4 mb-16">
              {productData?.nearest?.map((option, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="px-4 flex items-center justify-center w-full h-10 
              rounded-md bg-red-200"
                  >
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Outlet />
    </ProtectedRoute>
  );
};

export default ProductDetails;
