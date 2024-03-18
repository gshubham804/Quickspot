import { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : images?.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < images?.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentSlide]);

  return (
    <div className="relative w-full mt-4 mb-8">
      {/* Carousel wrapper */}
      <div className="relative h-60 sm:h-80 md:h-96 lg:h-[80vh] overflow-hidden rounded-lg">
        {images?.map((el, index) => (
          <div
            key={index}
            className={`px-2 absolute block w-full h-full object-cover transition-opacity ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={el}
              className="rounded-lg w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex bottom-5 left-1/2 transform -translate-x-1/2 space-x-3">
        {images?.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-red-400" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40 flex items-center justify-center h-10 w-10 bg-white bg-opacity-30 rounded-full cursor-pointer focus:outline-none"
        onClick={handlePrevSlide}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-6 h-6 text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40 flex items-center justify-center h-10 w-10 bg-white bg-opacity-30 rounded-full cursor-pointer focus:outline-none"
        onClick={handleNextSlide}
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
